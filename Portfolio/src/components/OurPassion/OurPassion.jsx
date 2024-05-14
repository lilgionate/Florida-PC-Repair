import React from 'react';
import './OurPassion.scss';


const ourpassion = () => {
    return (

<div className="videoCard container">
                <div className="cardContent grid">
                    <div className="cardText">
                        <h2>OUR PASSION</h2>
                        <p>Experience seamless PC repair services with our expert team, ensuring fast and reliable solutions to all your hardware and software issues.</p>
                    </div>

                    <div className="cardVideo">
                    <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/oGNPT6PnBLc?si=O4fLBk2uSrmrnGOq" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                    </iframe>
                    </div>
                </div>
            </div>

)
}

export default ourpassion;