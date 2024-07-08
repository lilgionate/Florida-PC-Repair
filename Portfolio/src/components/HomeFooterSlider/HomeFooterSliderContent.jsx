import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img src={slide.image} alt="" className="slider-image" />
                    <h2 className="slider-title">{slide.title}</h2>
                    <p className="slider-text">{slide.text}</p>
                    <button className="slider-btn">{slide.button}Learn More</button>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;