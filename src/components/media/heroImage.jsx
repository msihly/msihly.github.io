import React, { Component } from "react";

class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.state = { isInView: true };
    this.node = React.createRef();
  }

  componentDidMount() {
    const { hasObserver } = this.props;
    if (hasObserver !== false) {
      const observer = new IntersectionObserver(
        (entries) => {
          const { isInView } = this.state;
          entries.forEach((e) => {
            if (e.isIntersecting && !isInView) {
              this.setState({ isInView: true });
            } else if (!e.isIntersecting && isInView) {
              this.setState({ isInView: false });
            }
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(this.node.current);
    }
  }

  render() {
    const { isInView } = this.state;
    const { heading, subheading } = this.props;
    return (
      <div ref={this.node} className={`hero-image${isInView ? " scroll-cue" : ""}`}>
        <div className="deprecation-notice">
          <h2>{"Warning"}</h2>
          <h4>{"This site has been deprecated."}</h4>
          <h4>
            {"Please visit "}
            <a href="https://github.com/msihly">{"github.com/msihly"}</a>
            {" for current projects."}
          </h4>
        </div>
        {heading && <h1 className="hero-heading">{heading}</h1>}
        {subheading && <h3 className="hero-subheading">{subheading}</h3>}
      </div>
    );
  }
}

export default HeroImage;
