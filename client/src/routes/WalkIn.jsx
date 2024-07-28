import Navbar from '../components/Nav/Navbar';
import WalkInRepair from '../components/Services/WalkIn-Repair';
import Footer from '../components/Footer/Footer';
import NavSocial from '../components/NavSocial/NavSocial';

function WalkIn () {
  return (
    <>
      <Navbar />
      <NavSocial />
      <WalkInRepair />
      <Footer />
    </>
  )
}

export default WalkIn