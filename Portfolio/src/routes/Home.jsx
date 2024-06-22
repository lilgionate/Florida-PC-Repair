import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HomeImg from '../assets/home.avif';
import Builds from '../components/Builds/Builds';
import Repairs from '../components/Repairs/Repairs';
import Passion from '../components/OurPassion/OurPassion';
import Featured from '../components/Featured/FeaturedCarousel';
import Supported from '../components/Supported/SupportedCarousel';
import OurServices from '../components/OurServices/OurServices';
import Footer from '../components/Footer/Footer';
import NavSocial from '../components/NavSocial/NavSocial';

import Slider from '../components/ExpandingCards/ExpandingCards'; 
import data from '../components/ExpandingCards/Card'; 
import '../components/ExpandingCards/Card.scss'; 


function Home () {
  return (
    <>
      <Navbar />
      <NavSocial />
      <HeroTop 
      className="hero"
      heroImg={HomeImg}
      />
    <div className="header-slider-show-center">
      <Slider data={data} activeSlide={2} />
    </div>
      <Featured />
      <OurServices />
      <Repairs />  
      <Builds />
      <Supported />
      <Passion />
      <Footer />
    </>
  )
}

export default Home