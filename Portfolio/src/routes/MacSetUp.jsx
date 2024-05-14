import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacNewSetUp from '../components/MacNewSetUp/MacNewSetUp.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacSetUp () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Set Up New Mac"/>
      <MacNewSetUp />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacSetUp;