import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacUpgradeRep from '../components/MacUpgradeRep/MacUpgradeRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacUpgrade () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Mac Upgrade"/>
      <MacUpgradeRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacUpgrade;