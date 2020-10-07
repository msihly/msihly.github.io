import React, { Component, Children, cloneElement } from "react";
import { rotateArrayPos } from "../../utils";

const Indicator = ({ current, pos, action }) => {
    const handleClick = () => action(pos);
    return (<span onClick={handleClick} className={pos === current ? "active" : ""}></span>);
};

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplayId: 0,
            current: 0,
            transition: {
                pos: 0,
                direction: "next",
            },
        };
        this.TRANSITION_DURATION = 1000;
    }

    componentDidMount() { if (this.props.autoplay) { this.startAutoplay(); } }

    initializeVideo = (mediaList, pos) => {
        return mediaList[pos].type === "video" ? cloneElement(mediaList[pos], { autoPlay: true, onEnded: this.handleVideoEnded }) : mediaList[pos];
    }

    handleVideoEnded = () => {
        if (this.props.autoplay) { this.startAutoplay(); }
        this.nextMedia();
    }

    startAutoplay = () => {
        const [{ autoplayId }, { autoplay }] = [this.state, this.props];
        if (autoplayId === 0) { this.setState({ autoplayId: setInterval(() => this.nextMedia(), +autoplay) }); }
    }

    stopAutoplay = () => {
        const { autoplayId } = this.state;
        if (autoplayId !== 0) {
            clearInterval(autoplayId);
            this.setState({ autoplayId: 0 });
        }
    }

    goToMedia = pos => {
        const { current } = this.state;
        this.setState({
            transition: { pos, direction: pos > current ? "next" : "prev" }
        }, () => setTimeout(() => this.setState({ current: pos }), this.TRANSITION_DURATION));
    }

    nextMedia = () => {
        const [{ current }, { children }] = [this.state, this.props];
        let next = rotateArrayPos("next", current, Children.toArray(children).length);
        this.setState({
            transition: { pos: next, direction: "next" }
        }, () => setTimeout(() => this.setState({ current: next }), this.TRANSITION_DURATION));
    }

    previousMedia = () => {
        const [{ current }, { children }] = [this.state, this.props];
        let previous = rotateArrayPos("prev", current, Children.toArray(children).length);
        this.setState({
            transition: { pos: previous, direction: "prev" }
        }, () => setTimeout(() => this.setState({ current: previous }), this.TRANSITION_DURATION));
    }

    render() {
        const { current, transition: { pos: newPos, direction: newDirection } } = this.state;
        const { children, autoplay, hasIndicators } = this.props;
        const media = Children.toArray(children);
        const currentMedia = this.initializeVideo(media, current);
        const newMedia = this.initializeVideo(media, newPos);

        if (currentMedia.type === "video") { this.stopAutoplay(); }

        return (
            <div className={`carousel${newPos !== current ? ` transition-${newDirection}` : ""}`}
                onMouseEnter={autoplay ? this.stopAutoplay : null} onMouseLeave={autoplay ? this.startAutoplay : null}>
                <span onClick={this.previousMedia} className="carousel-left"></span>
                {media.length > 0 ? (
                    newPos !== current ? (
                        newDirection === "prev" ? [newMedia, currentMedia] : [currentMedia, newMedia]
                    ) : currentMedia
                ) : null}
                {hasIndicators ? (<div className="carousel-indicators">
                    {media.map((m, idx) => <Indicator key={`carousel-indic-${idx}`} action={this.goToMedia} pos={idx} current={current} />)}
                </div>) : null}
                <span onClick={this.nextMedia} className="carousel-right"></span>
            </div>
        );
    }
}

export default Carousel;