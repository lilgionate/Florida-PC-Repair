import Navbar from '../components/Nav/Navbar';
import NavSocial from '../components/NavSocial/NavSocial';
import Footer from '../components/Footer/Footer';
import CyberSecurityAnnualContainer from '../components/CyberSecurityPage/CyberSecurityAnnualPlan/CyberSecurityAnnualContainer';


function CyberSecurityAnnual () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <CyberSecurityAnnualContainer />
      <Footer />
    </>
  )
}

export default CyberSecurityAnnual;