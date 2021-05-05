import React, { useEffect } from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';
import axios from 'axios';
import setCards from '../utils/setCards';
import renderCards from '../utils/renderCards';

const SupplyCards = (props) => {

    useEffect(() => {
        axios.get('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
            .then(resp => {
                const cards = resp.data;
                setCards(cards);
            });
    }, []);

    const renderCards = (cardType) => {
        return props[cardType].map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    return (
        <div id="supply-card-container">
            <div id="coppers" className="card-container">
                {renderCards('coppers')}
            </div>
            <div id="silvers" className="card-container">
                {renderCards('silvers')}
            </div>
            <div id="golds" className="card-container">
                {renderCards('golds')}
            </div>
            <div id="cellars" className="card-container">
                {renderCards('cellars')}
            </div>
            <div id="moats" className="card-container">
                {renderCards('moats')}
            </div>
            <div id="workshops" className="card-container">
                {renderCards('workshops')}
            </div>
            <div id="woodcutters" className="card-container">
                {renderCards('woodcutters')}
            </div>
            <div id="villages" className="card-container">
                {renderCards('villages')}
            </div>
            <div id="estates" className="card-container">
                {renderCards('estates')}
            </div>
            <div id="duchys" className="card-container">
                {renderCards('duchys')}
            </div>
            <div id="provinces" className="card-container">
                {renderCards('provinces')}
            </div>
            <div id="smithys" className="card-container">
                {renderCards('smithys')}
            </div>
            <div id="militias" className="card-container">
                {renderCards('militias')}
            </div>
            <div id="remodels" className="card-container">
                {renderCards('remodels')}
            </div>
            <div id="markets" className="card-container">
                {renderCards('markets')}
            </div>
            <div id="mines" className="card-container">
                {renderCards('mines')}
            </div>
        </div>
    );
};

function msp(state) {

    const { 
        coppers, silvers, golds, estates, duchys, provinces, cellars, 
        moats, workshops, woodcutters, villages, militias, smithys, 
        remodels, markets, mines 
    } = state.supply

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