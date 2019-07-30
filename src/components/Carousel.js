import React from "react";
import { Icon } from "semantic-ui-react";

var hasOwn = {}.hasOwnProperty;

const classNames = (...args) => {
  var classes = [];
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === "object") {
      for (var key in arg) {
        if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
};

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
      isTransitioning: false,
      goingLeft: false
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyUp);
  }

  onKeyUp = e => {
    if (e.keyCode) {
      if (e.keyCode === 39) {
        this.showNextSet();
      } else if (e.keyCode === 37) {
        this.showPrevSet();
      }
    }
  };

  render() {
    const { images } = this.props;
    const { currentIndex, isTransitioning, goingLeft } = this.state;

    if (images) {
      return (
        <div className="carousel__wrapper">
          <div className="carousel__container">
            {images.map((img, index) => {
              let className = "carousel__image";
              if (index === currentIndex) className += " active";

              return (
                <img src={img} className={className} key={`img-${index}`} />
              );
            })}
          </div>
          <div className="carousel__controls">
            <button className="carousel__button" onClick={this.showPrevSet}>
              <Icon className="arrow right" />
            </button>
            <button className="carousel__button" onClick={this.showNextSet}>
              <Icon className="arrow left" />
            </button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  showPrevSet = () => {
    const currentIndex =
      (this.state.currentIndex - 1 + this.props.images.length) %
      this.props.images.length;
    this.setState({ currentIndex });
  };

  showNextSet = () => {
    const currentIndex =
      (this.state.currentIndex + 1) % this.props.images.length;
    this.setState({ currentIndex });
  };
}

export default Carousel;
