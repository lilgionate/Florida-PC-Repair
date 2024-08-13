
import Builds from '../Builds/Builds';
import Repairs from '../Repairs/Repairs';
import HomeFooterSlider from '../HomeFooterSlider/HomeFooterSlider';
import Supported from '../Supported/SupportedCarousel';
import OurServices from '../OurServices/OurServices';
import Slider from '../ExpandingCards/ExpandingCards'; 

export default function HomePageRep() {
  return (
    <>
      <Slider />
      <OurServices />
      <Supported />
      <div className="office-it-rep-section">
      <Repairs />
      </div>  
      <Builds />
      <HomeFooterSlider />
    </>
  )
}
