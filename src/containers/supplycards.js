import React, { useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { connect } from 'react-redux';
import setCards from '../utils/setCards';
import cardNames from '../utils/cardNames';
import styled from 'styled-components';

const SupplyCardContainer = styled.div`
    border-radius: 3px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    grid-template-rows: 45% 45%;
    justify-content: space-evenly;
    column-gap: 0.5%;
    width: 100%;
    height: 100%;
    padding: 3%;
`;

const CardContainer = styled.div`
    height: 80%;
    width: 100%;
    overflow: hidden;

    .rest {
        margin-left: -68.2%;
    }
`;

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
            return  <CardContainer 
                        key={index} 
                        id={cardType} 
                    >
                        {renderCards(cardType)}
                    </CardContainer>
        });
    };

    const renderCards = (cardType) => {
        return props[cardType].map((card, index) => {
            return  <Card 
                        key={card.id} 
                        card={card} 
                        index={index} 
                        className="supply-card" 
                    />
        });
    };

    return (
        <SupplyCardContainer>
            { renderCardContainers() }
        </SupplyCardContainer>
    );
};

function msp(state) {
    const {
        coppers, 
        silvers, 
        golds, 
        estates, 
        duchys, 
        provinces, 
        cellars,
        moats, 
        workshops, 
        woodcutters, 
        villages, 
        militias, 
        smithys,
        remodels, 
        markets, 
        mines
    } = state.supply;

    return {
        coppers,
        silvers,
        golds,
        estates,
        duchys,
        provinces,
        cellars,
        moats,
        workshops,
        woodcutters,
        villages,
        militias,
        smithys,
        remodels,
        markets,
        mines
    };
};

export default connect(msp, null)(SupplyCards);