import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import Footer from '../components/Footer/Footer';
import NavSocial from '../components/NavSocial/NavSocial';
import HomePageRep from '../components/HomePageRep/HomePageRep';

import HomeImg from '../assets/home-background.webp';

function Home () {
  return (
    <>
      <Navbar />
      <NavSocial />
      <HeroTop 
      className="hero"
      heroImg={HomeImg}
      />
      <HomePageRep />
      <Footer />
    </>
  )
}

export default Home