import { useEffect, useState } from "react";
import SliderContent from "./HomeFooterSliderContent";
import Dots from "./HomeFooterSliderDots";
import Arrow from "./HomeFooterSliderArrows";
import sliderImage from "./HomeFooterSliderImg";
import "./HomeFooterSlider.scss";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrow 
        prevSlide={() => 
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        } 
        nextSlide={() => 
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        } 
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onClick={(index) => setActiveIndex(index)}
      />
    </div>
  );
}

export default Slider;
