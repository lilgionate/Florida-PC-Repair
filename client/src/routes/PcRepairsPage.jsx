import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import PcRepairsPage from '../components/PcRepairsPage/PcRepairs';
import NavSocial from '../components/NavSocial/NavSocial';

function PcRepairs () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <PcRepairsPage />
      <Footer />
    </>
  )
}

export default PcRepairs