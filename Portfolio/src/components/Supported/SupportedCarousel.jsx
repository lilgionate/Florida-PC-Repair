
import React, { useEffect, useRef } from "react";
import img7 from "../../assets/acer.svg";
import img8 from "../../assets/windows.svg";
import img9 from "../../assets/lenovo.svg";
import img10 from "../../assets/hp.svg";
import img11 from "../../assets/Dell.svg";
import img12 from "../../assets/asus.svg";
import img13 from "../../assets/Apple.svg";
import img14 from "../../assets/toshiba.svg";
import img15 from "../../assets/ibm.svg";
import img16 from "../../assets/samsung.svg";
import "./SupportedCarousel.scss";

const LogosSlider = () => {
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const copy = logosContainerRef.current.cloneNode(true);
    logosContainerRef.current.parentNode.appendChild(copy);
  }, []);

  return (
    <>
    <h2 className="supported-header">Supported Equipment</h2>
    <div className="logos">
      <div className="logos-slide" ref={logosContainerRef}>
        <img src={img7} alt="Acer" />
        <img src={img8} alt="Windows" />
        <img src={img9} alt="Lenovo" />
        <img src={img10} alt="HP" />
        <img src={img12} alt="Asus" />
        <img src={img13} alt="Apple" />
        <img src={img14} alt="Toshiba" />
        <img src={img11} alt="Dell" />
        <img src={img15} alt="IBM" />
        <img src={img16} alt="Samsung" />
      </div>
    </div>

    </>
  );
};

export default LogosSlider;
