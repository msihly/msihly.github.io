import React, { Component, Children, isValidElement, cloneElement } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Section extends Component {
    constructor(props) {
        super(props);
        this.node = React.createRef();
    }

    componentDidMount() {
        const { id, hasObserver, createObserver } = this.props;
        if (hasObserver !== false) {
            createObserver(id);

            const observer = new IntersectionObserver(entries => {
                const { isInView, updateObserver } = this.props;
                entries.forEach(e => {
                    if (e.isIntersecting && !isInView) updateObserver(id, true);
                    else if (!e.isIntersecting && isInView) updateObserver(id, false);
                });
            }, { threshold: 0.7 });

            observer.observe(this.node.current);
        }
    }

    componentWillUnmount() {
        const { id, hasObserver, deleteObserver } = this.props;
        if (hasObserver !== false) deleteObserver(id);
    }

    render() {
        const { children, id, isInView } = this.props;
        return (
            <div ref={this.node} className={`section${isInView ? " in-view": ""}`}>
                {Children.map(children, child => isValidElement(child) ? cloneElement(child, { id }) : child)}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isInView: Object(state.observers.find(section => section.id === ownProps.id)).isInView ?? false,
});

const mapDispatchToProps = dispatch => ({
	createObserver: (id) => dispatch(actions.observerCreated(id)),
	deleteObserver: (id) => dispatch(actions.observerDeleted(id)),
	updateObserver: (id, viewState) => dispatch(actions.observerUpdated(id, viewState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);