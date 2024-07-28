import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import MacRepairsPage from '../components/MacRepairsPage/MacRepairs';
import NavSocial from '../components/NavSocial/NavSocial';

function MacRepairs () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <MacRepairsPage />
      <Footer />
    </>
  )
}

export default MacRepairs