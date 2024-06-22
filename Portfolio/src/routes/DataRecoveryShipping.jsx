import DataRecoveryShippingRequest from '../components/DataRecovery/DataRecoveryShippingRequest/DataRecoveryShippingRequest';
import HeroTop from '../components/Header/Hero-Top';
import HomeImg from '../assets/data-header.avif'; 



function DataRecovery () {
  return (
    <>
    <HeroTop
      className="DataShippingHero"
      heroImg={HomeImg}
      title={<span className="data-shipping-title">Data Recovery Mail-in Request</span>}
      />
      <DataRecoveryShippingRequest />
    </>
  )
}

export default DataRecovery;