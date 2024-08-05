import { useState } from 'react';
import './ComputerWarrantyPage.scss';

export const RemoteITFAQ = () => {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
    dropdown7: false,
    dropdown8: false,
    dropdown9: false,
    dropdown10: false,
    dropdown11: false,
    dropdown12: false,
    dropdown13: false,
    dropdown14: false,
    dropdown15: false,
  });

  const toggleDropdown = (dropdownId) => {
    const newDropdownStates = Object.fromEntries(
      Object.entries(dropdownStates).map(([key, value]) => [key, key === dropdownId ? !value : false])
    );
    setDropdownStates(newDropdownStates);
  };

  return (
    <>
    <div className='computer-faq__container'>
      <h3 className="computer-faq__subtitle-bottom">FAQ</h3>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown1')}>
          {dropdownStates.dropdown1 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
            What does your tech protection plan include?
          {dropdownStates.dropdown1 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              What does your tech protection plan include?
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown2')}>
          {dropdownStates.dropdown2 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          How much?
          {dropdownStates.dropdown2 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              $15, $35, or $50 depending on which Plan you choose. There are also $25/month plans for Custom PC Protection. You also may elect for annual plans.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown3')}>
          {dropdownStates.dropdown3 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          My device is broken now but I’m not enrolled yet - is my device protected?
          {dropdownStates.dropdown3 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              Yes! You’ll receive Day 1 protection. No wait time or black-out periods.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown4')}>
          {dropdownStates.dropdown4 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          Any deductible? Part costs?
          {dropdownStates.dropdown4 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              No deductible. We always aim to repair without parts (i.e. motherboard repairs or direct repairs), but if parts are needed, you just pay our vendor part costs only.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown5')}>
          {dropdownStates.dropdown5 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          When does my coverage start?
          {dropdownStates.dropdown5 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              As soon as you approve.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown6')}>
          {dropdownStates.dropdown6 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          Where is service performed?
          {dropdownStates.dropdown6 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              All Plans are redeemable at FPCS repair centers. Plus, Tech+ & Tech+ Shield may be remotely supported (FPCS will remote into your computer) when possible.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown7')}>
          {dropdownStates.dropdown7 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          Is there a minimum charge?
          {dropdownStates.dropdown7 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              Yes, 1 year is the minimum charge. The monthly or annual charge renews after Year 1 if there are no changes or cancellations on your end.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown8')}>
          {dropdownStates.dropdown8 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          Besides repairs, what’s included?
          {dropdownStates.dropdown8 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              Unlimited internal cleanings, speed tune-ups, virus cleanings, maintenance, diagnostics, and requests not within the exclusions.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown9')}>
          {dropdownStates.dropdown9 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          What's not included?
          {dropdownStates.dropdown9 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              Email fixes, Outlook issues/setups, data recovery, specialized software repairs, training, website tasks, and other non-computer tech repair requests.
              </p>
              <p className="computer-faq__dropdown-text">
              Why? These services are supported by specialists at different rates.
              </p>
              <p className="computer-faq__dropdown-text">
              But, great news, you can still have us take care of email/Outlook fixes by choosing it within our extras; or enlisting an onsite or remote tech.
              </p>
              <p className="computer-faq__dropdown-text">
              Training, or specialized software repairs may also be performed onsite or remote.
              </p>
              <p className="computer-faq__dropdown-text">
              Data recovery is performed on a per-request basis at one of our repair centers. 
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown10')}>
          {dropdownStates.dropdown10 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          What is the difference between the 3 plans?
          {dropdownStates.dropdown10 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              <span className='computer-faq-plan'>Tech</span> is perfect for hardware repairs and proactive maintenance. <span className='computer-faq-plan'>Tech+</span> includes Tech plus gives you a remote access component when doable. <span className='computer-faq-plan'>Tech+ Shield</span> includes Tech, Tech+ plus provides you complete cyber security proactive protection.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown11')}>
          {dropdownStates.dropdown11 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          Why are there extras?
          {dropdownStates.dropdown11 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              The 3 plans include techs who specialize in all the included services at our 
              repair centers. The extras include different resources with specialized 
              levels of experience, available onsite at your location or via remote access.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown12')}>
          {dropdownStates.dropdown12 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          What if device cannot be repaired?
          {dropdownStates.dropdown12 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              If you’re a first-time, first year, first issue Tech Protection Plan member, 
              and FPCS has deemed the device unfixable on this first issue, if there’s no 
              viable solution, such as another device replacement at same or less cost, then you are entitled to a refund of the payment made so far for that 
              first issue payment and monthly charge.  We aim for 100% satisfaction guarantee!
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown13')}>
          {dropdownStates.dropdown13 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          What happens after Year 1?
          {dropdownStates.dropdown13 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              Your membership rate is grandfathered to Year 2 and charged month to month or 
              year to year, depending on the term chosen. You are also eligible at that time 
              to transfer to another computer or device. This 
              is perfect if you’ve bought a new device or just want to switch to another one.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown14')}>
          {dropdownStates.dropdown14 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          Can I cancel before Year 1?
          {dropdownStates.dropdown14 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              Technically no. Why? Because we have already provided a serious discount by opting into this membership plan. But, if you’d like to pay the remainder of your Year 1 term due to a validated reason, FPCS chooses the right to approve this. 
              </p>
            </ul>
          )}
        </h5>
        <h5 className="computer-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown15')}>
          {dropdownStates.dropdown15 ? (
            <i className="computer-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="computer-faq__icon fas fa-caret-right"></i>
          )}
          When does my coverage start?
          {dropdownStates.dropdown15 && (
            <ul className="computer-faq__dropdown computer-faq__dropdown-open">
              <p className="computer-faq__dropdown-text">
              After Year 1, you may email info@floridapcsupport.com; reply to a previous ticket; or call (786) 674-1176.
              </p>
            </ul>
          )}
        </h5>
      </div>
    </>
  );
};

export default RemoteITFAQ;
