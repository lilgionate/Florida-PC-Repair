import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookDvdDriveRep from '../components/MacBookDvdDriveRep/MacBookDvdDriveRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookDvdDrive () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="DVD Drive Replacement"/>
      <MacBookDvdDriveRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookDvdDrive;