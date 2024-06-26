import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import IPhoneRepairsPage from '../components/IPhoneRepairsPage/IPhoneRepairs';
import NavSocial from '../components/NavSocial/NavSocial';

function IPhoneRepairs () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <IPhoneRepairsPage />
      <Footer />
    </>
  )
}

export default IPhoneRepairs