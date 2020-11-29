import React, { Component, Children, cloneElement } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Modal } from "../popovers";
import { rotateArrayPos } from "../../utils";

const Indicator = ({ current, pos, action }) => (
    <span onClick={() => action(pos)} className={pos === current ? "active" : ""}></span>
);

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplayId: -1,
            current: 0,
            transition: {
                pos: 0,
                direction: "next",
            },
        };
        this.TRANSITION_DURATION = 1000;
    }

    // VIDEOS
    setVideoRef = ele => this.video = ele;

    initializeVideo = (mediaList, pos, autoPlay = true) => {
        return mediaList[pos].type === "video" ? cloneElement(mediaList[pos], {
            autoPlay,
            controls: true,
            muted: true,
            ref: autoPlay && this.setVideoRef,
            onEnded: this.handleVideoEnded
        }) : mediaList[pos];
    }

    pauseVideo = () => { if (this.video) this.video.pause(); }

    playVideo = () => {
        if (this.video) {
            const { paused, ended, readyState } = this.video;
            if (ended) this.handleVideoEnded();
            else if (paused && readyState > 2) this.video.play();
        }
    }

    // AUTOPLAY
    handleVideoEnded = () => this.props.autoplay && this.nextMedia();

    startAutoplay = () => {
        const [{ autoplayId }, { autoplay }] = [this.state, this.props];
        if (autoplayId === -1) { this.setState({ autoplayId: setInterval(this.nextMedia, +autoplay) }); }
    }

    stopAutoplay = () => {
        const { autoplayId } = this.state;
        if (autoplayId !== -1) {
            clearInterval(autoplayId);
            this.setState({ autoplayId: -1 });
        }
    }

    // PLAYER CONTROLS
    goToMedia = pos => {
        const { current } = this.state;
        this.setState({ transition: { pos, direction: pos > current ? "next" : "prev" } },
            () => setTimeout(() => this.setState({ current: pos }), this.TRANSITION_DURATION));
    }

    nextMedia = () => {
        const [{ current }, { children }] = [this.state, this.props];
        const next = rotateArrayPos("next", current, Children.toArray(children).length);
        this.setState({ transition: { pos: next, direction: "next" } },
            () => setTimeout(() => this.setState({ current: next }), this.TRANSITION_DURATION));
    }

    previousMedia = () => {
        const [{ current }, { children }] = [this.state, this.props];
        const previous = rotateArrayPos("prev", current, Children.toArray(children).length);
        this.setState({ transition: { pos: previous, direction: "prev" } },
            () => setTimeout(() => this.setState({ current: previous }), this.TRANSITION_DURATION));
    }

    closeLightbox = () => {
        const { id, closeModal } = this.props;
        this.startAutoplay();
        closeModal(`${id}-lightbox`);
    }

    openLightbox = () => {
        const { id, openModal } = this.props;
        this.stopAutoplay();
        openModal(`${id}-lightbox`);
    }

    // LIFECYCLE
    componentDidMount() { if (this.props.autoplay) this.startAutoplay();  }

    componentDidUpdate() { if (this.video) this.props.isInView ? this.playVideo() : this.pauseVideo(); }

    render() {
        const { current, transition: { pos: newPos, direction: newDirection } } = this.state;
        const { children, id, autoplay, hasIndicators, hasLightbox, isLightboxOpen } = this.props;
        const media = Children.toArray(children);
        const isTransitioning = newPos !== current;
        const [currentMedia, newMedia] = [current, newPos].map(pos => this.initializeVideo(media, pos, !isTransitioning));

        if (currentMedia.type === "video") this.stopAutoplay();

        return (
            <React.Fragment>
                <div className={`carousel${isTransitioning ? ` transition-${newDirection}` : ""}`}
                    onMouseEnter={autoplay && this.stopAutoplay} onMouseLeave={autoplay && this.startAutoplay}>
                    {media.length > 0 ? (
                        isTransitioning ? (
                            newDirection === "prev" ? [newMedia, currentMedia] : [currentMedia, newMedia]
                        ) : currentMedia
                    ) : null}
                    {hasIndicators ? (<div className="carousel-indicators">
                        {media.map((m, idx) => <Indicator key={`carousel-${idx}`} action={this.goToMedia} pos={idx} current={current} />)}
                    </div>) : null}
                    {hasLightbox && <span onClick={this.openLightbox} className="lightbox-button"></span>}
                    <span onClick={this.previousMedia} className="carousel-left"></span>
                    <span onClick={this.nextMedia} className="carousel-right"></span>
                </div>
                {isLightboxOpen ? (
                    <Modal id={`${id}-lightbox`} classes={`carousel-modal${isLightboxOpen ? "" : " hidden"}`}>
                        <div className={`carousel${isTransitioning ? ` transition-${newDirection}` : ""}`}
                            onMouseEnter={autoplay ? this.stopAutoplay : null} onMouseLeave={autoplay ? this.startAutoplay : null}>
                            {media.length > 0 ? (
                                isTransitioning ? (
                                    newDirection === "prev" ? [newMedia, currentMedia] : [currentMedia, newMedia]
                                ) : currentMedia
                            ) : null}
                            {hasIndicators ? (<div className="carousel-indicators">
                                {media.map((m, idx) => <Indicator key={`carousel-indic-${idx}`} action={this.goToMedia} pos={idx} current={current} />)}
                            </div>) : null}
                            <span onClick={this.closeLightbox} className="lightbox-button"></span>
                            <span onClick={this.previousMedia} className="carousel-left"></span>
                            <span onClick={this.nextMedia} className="carousel-right"></span>
                        </div>
                    </Modal>
                ) : null}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isInView: Object(state.observers.find(observer => observer.id === ownProps.id)).isInView ?? false,
    isLightboxOpen: Object(state.modals.find(modal => modal.id === `${ownProps.id}-lightbox`)).isOpen ?? false,
});

const mapDispatchToProps = dispatch => ({
	closeModal: id => dispatch(actions.modalClosed(id)),
	openModal: id => dispatch(actions.modalOpened(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);