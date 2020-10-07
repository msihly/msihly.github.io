import React, { Component } from "react";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = { isInView: false };
        this.node = React.createRef();
    }

    componentDidMount() {
        const { hasObserver } = this.props;
        if (hasObserver !== false) {
            const observer = new IntersectionObserver(entries => {
                const { isInView } = this.state;
                entries.forEach(e => {
                    if (e.isIntersecting && !isInView) { this.setState({ isInView: true }); }
                    else if (!e.isIntersecting && isInView) { this.setState({ isInView: false }); }
                });
            }, { threshold: 1 });
            observer.observe(this.node.current);
        }
    }

    render() {
        const [{ isInView }, { children }] = [this.state, this.props];
        return (
            <div ref={this.node} className={`section${isInView ? " in-view": ""}`}>{children}</div>
        );
    }
}

export default Section;