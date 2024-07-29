import "./builds.scss";
import { Data } from "./BuildsData";
import ProgressBar from "./ProgressBar/ProgressBar";
import Modal from './Modal/finance'; 
import { useState } from "react";

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
    <section className="builds-main-container">
      <h1 className="builds-section__title">POPULAR BUILDS</h1>
      <p className="builds-section__subtitle">Builds crafted for every need, from gaming to content creation, offering unparalleled performance and style.</p>

      <Swiper
        className="builds-swiper"
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
            <SwiperSlide className="builds-card" key={id}>
              <div className="builds-img-container">
              <img src={images} alt="" className="builds-img" />
              </div>
              <h3 className="builds-name">{title}</h3>
              <div className="price-section">
                <h4 className="builds-price-section__title">{price.title}</h4>
                <p className="builds-price-section__price">{price.amount}</p>
                <div>
                <p 
                    onMouseEnter={() => handleDescriptionHover(price.finance)}
                    className="builds-price-section-description"
                    dangerouslySetInnerHTML={{ __html: price.description }}
                  ></p>
                <Modal description={modalDescription} />
                </div>

             </div>
              <div className="builds-progress-bars">
                {progress.map((value, index) => (
                <ProgressBar key={index} title={progressTitle[index]} done={value} image={progressImages[index]} />
                ))}
              </div>
              
             <button className="builds-button builds-button-view-build">View Build</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Builds;