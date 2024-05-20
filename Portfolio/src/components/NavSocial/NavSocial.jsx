import React, { useState } from 'react';
import './NavSocial.scss';

const contactIcons = [
    { url: 'mailto:info@floridapcsupport.com', alt: 'Email Icon', iconClass: 'fa-regular fa-envelope' },
    { url: 'tel:(786) 674-1176', alt: 'Phone Icon', iconClass: 'fas fa-phone' },
    { url: 'https://wa.me/17866741176', alt: 'Whatsapp Icon', iconClass: 'fab fa-whatsapp' },
    { url: 'https://facebook.com', alt: 'Facebook Icon', iconClass: 'fab fa-facebook' },
    { url: 'https://tiktok.com', alt: 'TikTok Icon', iconClass: 'fab fa-tiktok' },
    { url: 'https://twitter.com', alt: 'Twitter Icon', iconClass: 'fab fa-twitter' },
    { url: 'https://instagram.com', alt: 'Instagram Icon', iconClass: 'fab fa-instagram' },
    { url: 'https://youtube.com', alt: 'YouTube Icon', iconClass: 'fab fa-youtube' },
    { url: 'https://linkedin.com', alt: 'LinkedIn Icon', iconClass: 'fa-solid fa-blog' },
];

const ContactBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleNavbar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button className="toggle-button" onClick={toggleNavbar}>
                <i className={`fas ${isVisible ? 'fas fa-arrow-right' : 'fas fa-arrow-left'}`}></i>
            </button>
            <div className={`contact-bar ${isVisible ? 'visible' : 'hidden'}`}>
                <div className="contact-icons">
                    {contactIcons.map((icon, index) => (
                        <div className="contact-item" key={index}>
                            <a href={icon.url} target="_blank" aria-label={icon.alt} rel="noopener noreferrer">
                                <i className={icon.iconClass + " nav-social-icon"}></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactBar;
