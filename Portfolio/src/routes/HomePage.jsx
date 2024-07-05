import Navbar from '../components/Nav/Navbar';
import HomeHeader from '../components/HomePageRep/HomeHeader';
import Footer from '../components/Footer/Footer';
import NavSocial from '../components/NavSocial/NavSocial';
import HomePageRep from '../components/HomePageRep/HomePageRep';


function Home () {
  return (
    <>
      <Navbar />
      <NavSocial />
      <HomeHeader 
      className="hero"
      />
      <HomePageRep />
      <Footer />
    </>
  )
}

export default Home