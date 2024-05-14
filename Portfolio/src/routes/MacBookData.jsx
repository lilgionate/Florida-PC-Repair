import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookDataRec from '../components/MacBookDataRec/MacBookDataRec';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookData () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="MacBook Data Recovery"/>
      <MacBookDataRec />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookData;