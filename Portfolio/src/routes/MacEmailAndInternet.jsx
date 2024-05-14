import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacEmailAndInternetRep from '../components/MacEmailAndInternetRep/MacEmailAndInternetRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacEmailAndInternet () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Email And Internet Mac Repair"/>
      <MacEmailAndInternetRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacEmailAndInternet;