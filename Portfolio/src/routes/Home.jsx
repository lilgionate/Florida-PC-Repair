import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HomeImg from '../assets/home.avif';
import Builds from '../components/Builds/Builds';
import Repairs from '../components/Repairs/Repairs';
import Passion from '../components/OurPassion/OurPassion';
import Featured from '../components/Featured/FeaturedCarousel';
import Supported from '../components/Supported/SupportedCarousel';
import ExpandingCards from '../components/ExpandingCards/ExpandingCards';
import OurServices from '../components/OurServices/OurServices';
import Footer from '../components/Footer/Footer';
import img1 from '../assets/warranty.jpeg';
import img2 from '../assets/IT-Support.jpg';
import img3 from '../assets/onsite.jpg';
import img4 from '../assets/custom.jpg';
import img5 from '../assets/data-recovery.jpg';
import img6 from '../assets/warranty1.jpg';


const images = [
  { 
    id: 1, 
    title: "Schedule Your free Diagnostic",
    src: img1,
    active: true,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 2, 
    title: "Remote IT Support",
    src: img2,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 3, 
    title: "Onsite Tech Visit",
    src: img3,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 4, 
    title: "Custom PC Build & Repair",
    src: img4,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 5, 
    title: "Data Recovery",
    src: img5,
    active: false,
    linkUrl: "https://www.google.com",
  },
  { 
    id: 6, 
    title: "Tech Protection Warranty",
    src: img6,
    active: false,
    linkUrl: "https://www.google.com",
  }

  ];


function Home () {
  return (
    <>
      <Navbar />
      <HeroTop 
      cName="hero"
      heroImg={HomeImg}
      />
      <ExpandingCards data={images}/>
      <Featured />
      <Builds />
      <OurServices />
      <Repairs />  
      <Supported />
      <Passion />
      <Footer />
    </>
  )
}

export default Home