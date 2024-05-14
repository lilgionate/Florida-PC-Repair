import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacVirusRem from '../components/MacVirusRem/MacVirusRem.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacVirus () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows / Mac Virus Removal"/>
      <MacVirusRem />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacVirus;