import React, { useState } from 'react';
import './RemoteITPage.scss';

export const RemoteITFAQ = () => {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
  });

  const toggleDropdown = (dropdownId) => {
    const newDropdownStates = Object.fromEntries(
      Object.entries(dropdownStates).map(([key, value]) => [key, key === dropdownId ? !value : false])
    );
    setDropdownStates(newDropdownStates);
  };

  return (
    <>
    <div className='remote-it-faq__container'>
      <h3 className="remote-it-faq__subtitle-bottom">FAQ</h3>
        <h5 className="remote-it-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown1')}>
          {dropdownStates.dropdown1 ? (
            <i className="remote-it-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="remote-it-faq__icon fas fa-caret-right"></i>
          )}
          How is the $35 per every 15 minute plan billed?
          {dropdownStates.dropdown1 && (
            <ul className="remote-it-faq__dropdown remote-it-faq__dropdown-open">
              <p className="remote-it-faq__dropdown-text">
              There is a minimum charge of $35 which covers the first 15 minutes. Beyond the first 15 minutes, the rate is prorated to the next 15-minute increment. For instance, if your session is 25 minutes long, you’ll be billed for 30 minutes or $70.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="remote-it-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown2')}>
          {dropdownStates.dropdown2 ? (
            <i className="remote-it-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="remote-it-faq__icon fas fa-caret-right"></i>
          )}
          Does the annual plan really cover me the whole year?
          {dropdownStates.dropdown2 && (
            <ul className="remote-it-faq__dropdown remote-it-faq__dropdown-open">
              <p className="remote-it-faq__dropdown-text">
              At a maximum of 12 sessions, you are covered throughout the whole year. Each session is as long as you need it.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="remote-it-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown3')}>
          {dropdownStates.dropdown3 ? (
            <i className="remote-it-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="remote-it-faq__icon fas fa-caret-right"></i>
          )}
          Do you handle Outlook & Email requests?
          {dropdownStates.dropdown3 && (
            <ul className="remote-it-faq__dropdown remote-it-faq__dropdown-open">
              <p className="remote-it-faq__dropdown-text">
              We proudly have a team of email experts who can handle all Outlook & email setups, migrations, transfers, and issues.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="remote-it-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown4')}>
          {dropdownStates.dropdown4 ? (
            <i className="remote-it-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="remote-it-faq__icon fas fa-caret-right"></i>
          )}
          How do I know if you can fix my issue?
          {dropdownStates.dropdown4 && (
            <ul className="remote-it-faq__dropdown remote-it-faq__dropdown-open">
              <p className="remote-it-faq__dropdown-text">
              We always preview your described issue ahead of the remote session. It’s rare, but if we cannot fix it, we’ll let you know ahead of time to not waste your time.
              </p>
            </ul>
          )}
        </h5>
        <h5 className="remote-it-faq__cursor-pointer" onClick={() => toggleDropdown('dropdown5')}>
          {dropdownStates.dropdown5 ? (
            <i className="remote-it-faq__icon fas fa-caret-down"></i>
          ) : (
            <i className="remote-it-faq__icon fas fa-caret-right"></i>
          )}
          What if you don't fix my issue? Is this guaranteed?
          {dropdownStates.dropdown5 && (
            <ul className="remote-it-faq__dropdown remote-it-faq__dropdown-open">
              <p className="remote-it-faq__dropdown-text">
              Our work is 100% guaranteed. We wouldn’t have it any other way. No fix, no charge.
              </p>
            </ul>
          )}
        </h5>
      </div>
    </>
  );
};

export default RemoteITFAQ;
