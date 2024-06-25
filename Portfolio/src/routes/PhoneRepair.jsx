import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import PhoneRepairsPage from '../components/PhoneRepairsPage/PhoneTabletRepairs';
import NavSocial from '../components/NavSocial/NavSocial';

function PhoneRepairs () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <PhoneRepairsPage />
      <Footer />
    </>
  )
}

export default PhoneRepairs