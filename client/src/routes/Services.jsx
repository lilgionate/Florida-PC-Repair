import Navbar from '../components/Nav/Navbar';
import Repairs from '../components/Repairs/Repairs';
import Footer from '../components/Footer/Footer';
import WalkInRepair from '../components/Services/WalkIn-Repair';

function Services () {
  return (
    <>
      <Navbar/>
      <WalkInRepair />
      <Repairs />
      <Footer />
    </>
  )
}

export default Services