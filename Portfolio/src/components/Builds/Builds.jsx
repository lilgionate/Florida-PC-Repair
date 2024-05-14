import "./builds.scss";
import { Data } from "./BuildsData";
import ProgressBar from "./ProgressBar/ProgressBar";
import Modal from './Modal/finance'; 
import React, { useState } from "react";
// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Builds = () => {
  const [modalDescription, setModalDescription] = useState('');

  const handleDescriptionHover = (description) => {
    setModalDescription(description);
  };

  return (
    <section className="testimonial container section">
      <h1 className="section__title">POPULAR BUILDS</h1>
      <p className="section__subtitle">Discover top-performing builds crafted for every need, from gaming to content creation, offering unparalleled performance and style.</p>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, images, title, progress, progressImages, progressTitle, price }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={images} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <div className="progress-bars">
                {progress.map((value, index) => (
                <ProgressBar key={index} title={progressTitle[index]} done={value} image={progressImages[index]} />
                ))}
              </div>
              <div className="price-section">
                <h4 className="price-section__title">{price.title}</h4>
                <p className="price-section__price">{price.amount}</p>
                <p onMouseEnter={() => handleDescriptionHover(price.finance)}
                className="price-section__description"
              >
                {price.description}</p>
                <Modal description={modalDescription} />

             </div>
             <button className="button button-view-build">View Build</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Builds;