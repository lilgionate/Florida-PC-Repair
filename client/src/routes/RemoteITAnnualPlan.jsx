import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import RemoteITAnnualPlanPage from '../components/RemoteITPage/RemoteITAnnualPlan/RemoteITAnnualPlanPage';
import NavSocial from '../components/NavSocial/NavSocial';

function RemoteITAnnualPlan () {
  return (
    <>
      <Navbar/>
      <NavSocial />
      <RemoteITAnnualPlanPage />
      <Footer />
    </>
  )
}

export default RemoteITAnnualPlan;