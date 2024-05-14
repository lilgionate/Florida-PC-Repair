import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsVirusRemovalRep from '../components/WindowsVirusRemovalRep/WindowsVirusRemovalRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsVirusRemoval () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="PC Virus Removal"/>
      <WindowsVirusRemovalRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsVirusRemoval;