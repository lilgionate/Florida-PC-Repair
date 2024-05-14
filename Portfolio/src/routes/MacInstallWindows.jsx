import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacInstallWindowsRep from '../components/MacInstallWindowsRep/MacInstallWindowsRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacInstallWindows () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Install Windows On Mac"/>
      <MacInstallWindowsRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacInstallWindows;