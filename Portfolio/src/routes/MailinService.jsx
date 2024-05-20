import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import MailinServiceRep from '../components/MailinServiceRep/MailinServiceRep';
import NavSocial from '../components/NavSocial/NavSocial';

function MailinService () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <MailinServiceRep />
      <Footer />
    </>
  )
}

export default MailinService;