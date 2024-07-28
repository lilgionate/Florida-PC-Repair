import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import MessengerServiceRep from '../components/MessengerServiceRep/MessengerServiceRep';
import NavSocial from '../components/NavSocial/NavSocial';

function MessengerService () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <MessengerServiceRep />
      <Footer />
    </>
  )
}

export default MessengerService;