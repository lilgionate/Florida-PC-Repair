import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookPasswordRep from '../components/MacBookPasswordRep/MacBookPasswordRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookPasswordReset () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Password Reset"/>
      <MacBookPasswordRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookPasswordReset;