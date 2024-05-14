
import React, { useEffect, useRef } from "react";
import img7 from "../../assets/3m.svg";
import img8 from "../../assets/barstool-store.svg";
import img9 from "../../assets/budweiser.svg";
import img10 from "../../assets/buzzfeed.svg";
import img11 from "../../assets/forbes.svg";
import img12 from "../../assets/macys.svg";
import img13 from "../../assets/menshealth.svg";
import img14 from "../../assets/mrbeast.svg";
import "./FeaturedCarousel.scss";

const LogosSlider = () => {
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const copy = logosContainerRef.current.cloneNode(true);
    logosContainerRef.current.parentNode.appendChild(copy);
  }, []);

  return (
    <>
    <h2 className="featured-header">Trusted Partnerships</h2>
    <div className="logos">
      <div className="logos-slide" ref={logosContainerRef}>
        <img src={img7} alt="3M" />
        <img src={img8} alt="Barstool Store" />
        <img src={img9} alt="Budweiser" />
        <img src={img10} alt="BuzzFeed" />
        <img src={img11} alt="Forbes" />
        <img src={img12} alt="Macy's" />
        <img src={img13} alt="Men's Health" />
        <img src={img14} alt="MrBeast" />
      </div>
    </div>

    </>
  );
};

export default LogosSlider;
