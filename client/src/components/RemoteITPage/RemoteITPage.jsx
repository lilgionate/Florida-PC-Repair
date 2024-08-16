import RemoteITHeader from './RemoteITHeader';
import RemoteITPricing from './RemoteITPricing';
import ThreeEasySteps from './Remote3Steps';
import SupportedComputers from './SupportedComputers';
import InstantHelp from './InstantHelp';
import ITFAQ from './RemoteITFAQ';
import ITGetStarted from './ITGetStarted';

const RemoteITPage = () => {
  return (
   <>
    <RemoteITHeader />
    <RemoteITPricing />
    <ThreeEasySteps />
    <SupportedComputers />
    <InstantHelp />
    <ITFAQ />
    <ITGetStarted />
   </>
  );
};

export default RemoteITPage;
