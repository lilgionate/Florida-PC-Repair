import React, { useState } from "react";
import Card from "./Card";
import "./ExpandingCards.scss";  

const ExpandingCards = (props) => {

    const [data, setData] = useState(props.data);

    const onCardClick = (id) => {
        const newState = [...data];
        newState.map((item) => item.id === id ? item.active = true : item.active = false);
        setData(newState);
    }

    if (!data || data.length <= 0) {
        return "No data to render cards!";
    }

    return (
        <div className="ex-body">
        <div className="expanding-cards">
            {
                data.map((card) => <Card key={card.id} 
                data={card} onCardClick={onCardClick} /> )
            }
        </div>
        </div>
    );
    };

    export default ExpandingCards;