import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";
import './Card.scss';

const Slider = ({ data, activeSlide = 0 }) => {
  const [activeSlideState, setActiveSlideState] = useState(activeSlide);

  const next = () => {
    if (activeSlideState < data.length - 1) {
      setActiveSlideState(activeSlideState + 1);
    }
  };

  const prev = () => {
    if (activeSlideState > 0) {
      setActiveSlideState(activeSlideState - 1);
    }
  };

  const getStyles = (index) => {
    let style = {
      opacity: 0,
      transform: "",
      zIndex: 7,
    };

    if (activeSlideState === index) {
      style = {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
        backdropFilter: "blur(7.5px)",
        WebkitBackdropFilter: "blur(7.5px)",
      };
    } else if (activeSlideState - 1 === index) {
      style = {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    } else if (activeSlideState + 1 === index) {
      style = {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    } else if (activeSlideState - 2 === index) {
      style = {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    } else if (activeSlideState + 2 === index) {
      style = {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    } else if (index < activeSlideState - 2) {
      style = {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    } else if (index > activeSlideState + 2) {
      style = {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
    }

    return style;
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="header-slider-home-page" {...handlers}>
      <div className="header-slider-slideC">
        {data.map((item, i) => (
          <div
            key={item.id}
            className="header-slider-slide"
            style={getStyles(i)}
          >
            <div
              className="header-slider-slideImage"
              style={{ backgroundImage: `url(${item.src})` }}
            ></div>
            <SliderContent {...item} />
          </div>
        ))}
      </div>
      <div className="btns">
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faChevronLeft}
          color="#fff"
          size="2x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faChevronRight}
          color="#fff"
          size="2x"
        />
      </div>
    </div>
  );
};

const SliderContent = (props) => {
  return (
    <div className="header-slider-sliderContent">
      {props.icon}
      <h3 className="header-slider-title">{props.title}</h3>
      <p className="header-slider-des">{props.desc}</p>
    </div>
  );
};

export default Slider;
