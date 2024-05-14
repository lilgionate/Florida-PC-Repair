import React from "react";
import "./Card.scss";

const Card = (props) => {
    
    const {id , src, active, title, linkUrl } = props.data;
    
    return ( 
        <div className={`ex-card ${active && 'active'}`}
            style={{ backgroundImage: `url(${src})` }}
                onClick={() => props.onCardClick(id)}>

           <div className="ex-card-content">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="ex-card-button">
               <i className="ex-i fas fa-arrow-right"></i>
            </a>
            <h2>{title}</h2>
        </div>
        </div>
    )
};

export default Card;