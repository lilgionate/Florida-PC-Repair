import React from 'react';
import './NavSocial.scss';

const contactIcons = [
    { url: 'https://facebook.com', alt: 'Facebook Icon', iconClass: 'fab fa-facebook' },
    { url: 'https://tiktok.com', alt: 'TikTok Icon', iconClass: 'fab fa-tiktok' },
    { url: 'https://twitter.com', alt: 'Twitter Icon', iconClass: 'fab fa-twitter' },
    { url: 'https://instagram.com', alt: 'Instagram Icon', iconClass: 'fab fa-instagram' },
    { url: 'https://youtube.com', alt: 'YouTube Icon', iconClass: 'fab fa-youtube' },
    { url: 'https://linkedin.com', alt: 'LinkedIn Icon', iconClass: 'fab fa-linkedin' }
];

const contactLinks = [
    { url: 'mailto:support@newyorkcomputerhelp.com', text: 'support@newyorkcomputerhelp.com', alt: 'Email Icon', iconClass: 'fa-regular fa-envelope' },
    { url: 'tel:212-599-0339', text: '(212) 599-0339', alt: 'Phone Icon', iconClass: 'fas fa-phone' },
    { url: 'https://wa.me/12125990339', text: 'Whatsapp', alt: 'Whatsapp Icon', iconClass: 'fab fa-whatsapp' }
];

const ContactBar = () => {
    return (
        <div className="contact-bar">
            <div className="contact-links">
                {contactLinks.map((link, index) => (
                    <div className="contact-item" key={index}>
                        <i className={link.iconClass + " nav-social-icon"}></i>
                        <a href={link.url} className='nav-social-link'>{link.text}</a>
                    </div>
                ))}
            </div>
            <div className="contact-icons">
                {contactIcons.map((icon, index) => (
                    <div className="contact-item" key={index}>
                        <a href={icon.url} target="_blank" aria-label={icon.alt}>
                            <i className={icon.iconClass + " nav-social-icon"}></i>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactBar;
