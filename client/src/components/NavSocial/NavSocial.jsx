import { useState, useEffect } from 'react';
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
    
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleNavbar = () => {
        setIsAnimating(true);
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false);
            }, 300); // Duration of the animation in ms
            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);

    return (
        <div className="contact-bar-container">
            <div className={`button-container ${isVisible ? 'visible' : ''}`}>
                <button
                    className={`toggle-button ${isAnimating ? 'animating' : ''}`}
                    onClick={toggleNavbar}
                >
                    <i className={`fas ${isVisible ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                </button>
            </div>
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
