import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookSpillRep from '../components/MacBookSpillRep/MacBookSpillRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookSpill () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="MacBook Spill Repairs"/>
      <MacBookSpillRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookSpill;