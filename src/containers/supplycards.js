import React, { useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import setCards from '../utils/setCards';
import cardNames from '../utils/cardNames';

const SupplyCards = (props) => {

    useEffect(() => {
        axios.get('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
            .then(resp => {
                const cards = resp.data;
                setCards(cards);
            });
    }, []);

    const renderCardContainers = () => {
        return cardNames.map((cardName, index) => {
            const cardType = cardName.toLowerCase() + 's';
            return <div key={index} id={cardType} className='card-container'>{renderCards(cardType)}</div>
        });
    };

    const renderCards = (cardType) => {
        return props[cardType].map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    return (
        <div id="supply-card-container">
            { renderCardContainers() }
        </div>
    );
};

export default SupplyCards;