import { useState } from 'react';
import './CyberSecurityPage.scss';

import SecurityListItem from './CyberProtectionPlanList';

const CyberSecurityProtection = () => {

    const [dropdownStates, setDropdownStates] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
        dropdown4: false,
        dropdown5: false,
        dropdown6: false,
        dropdown7: false,
        dropdown8: false,
    });
  
    const toggleDropdown = (dropdownId) => {
        const newDropdownStates = Object.fromEntries(
            Object.entries(dropdownStates).map(([key, value]) => [key, key === dropdownId ? !value : false])
        );
        setDropdownStates(newDropdownStates);
    };

    return (
        <div className="cyber-protection-plan-container">
            <h1 className="cyber-protection-title">Florida PC Support - Cyber Security Protection Plan</h1>
            <p className="cyber-protection-body">
                Security Protection Plan for your Computer or Device.
            </p>
            <p className="cyber-protection-body">
                Protect your computer from viruses, spyware, browser redirects, and malicious threats.
            </p>
            <h1 className="cyber-protection-price">Only $25 per month for the year</h1>
      
            <div className='cyber-security-container'>
                <div className="cyber-security-flex-item">
                    <ul className="cyber-security-list">
                        <SecurityListItem text="Don’t worry about paying every time you have a virus" />
                        <SecurityListItem text="Includes security protection setup" />
                        <SecurityListItem text="Receive unlimited remote security support" />
                        <SecurityListItem text="Receive constant monitoring / protection" />
                        <SecurityListItem text="Includes: anti-virus, firewall, VPN, patch management, browser extension security, and content filtering" />
                        <SecurityListItem text="You are locked in at the low $25/month rate for future years even when rates increase." />
                        <SecurityListItem text="Includes computers, phones, tablets, and other devices" />
                    </ul>
                </div>
                <div className="cyber-security-flex-item cyber-security-bg-white">
                    <h2 className="cyber-security-title">All security protection services are covered within the policy</h2>

                    <h5 className="cyber-security-cursor-pointer" onClick={() => toggleDropdown('dropdown1')}>
                        {dropdownStates.dropdown1 ? (
                            <i className="cyber-security-data-icon fas fa-caret-down"></i>
                        ) : (
                            <i className="cyber-security-data-icon fas fa-caret-right"></i>
                        )}
                        <span className='cyber-security-dropdown-title'>Virus Removals</span>
                        {dropdownStates.dropdown1 && (
                            <ul className="cyber-security-dropdown cyber-security-dropdown-open">
                                <p className="cyber-security-dropdown-text">Prone to getting viruses? Sleep well at night knowing we’ve got your back.</p>
                            </ul>
                        )}
                    </h5>

                    {/* Repeat similar structure for other dropdowns */}

                </div>
            </div>
        </div>
    );
};

export default CyberSecurityProtection;
