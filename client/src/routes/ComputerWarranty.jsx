import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import ComputerWarrantyPage from '../components/ComputerWarrantyPage/ComputerWarrantyPage';
import NavSocial from '../components/NavSocial/NavSocial';

function ComputerWarranty () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <ComputerWarrantyPage />
      <Footer />
    </>
  )
}

export default ComputerWarranty