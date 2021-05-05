import React, { useEffect } from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';
import axios from 'axios';
import setCards from '../utils/setCards';

const SupplyCards = (props) => {

    useEffect(() => {
        axios.get('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
            .then(resp => {
                const cards = resp.data;
                setCards(cards);
            });
    }, []);

    const renderCoppers = () => {
        return props.coppers.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderSilvers = () => {
        return props.silvers.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderGolds = () => {
        return props.golds.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderEstates = () => {
        return props.estates.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderDuchys = () => {
        return props.duchys.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderProvinces = () => {
        return props.provinces.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderCellars = () => {
        return props.cellars.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMoats = () => {
        return props.moats.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderWorkshops = () => {
        return props.workshops.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderWoodcutters = () => {
        return props.woodcutters.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderVillages = () => {
        return props.villages.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderSmithys = () => {
        return props.smithys.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMilitias = () => {
        return props.militias.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderRemodels = () => {
        return props.remodels.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMarkets = () => {
        return props.markets.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMines = () => {
        return props.mines.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    return (
        <div id="supply-card-container">
            <div id="coppers" className="card-container">
                {renderCoppers()}
            </div>
            <div id="silvers" className="card-container">
                {renderSilvers()}
            </div>
            <div id="golds" className="card-container">
                {renderGolds()}
            </div>
            <div id="cellars" className="card-container">
                {renderCellars()}
            </div>
            <div id="moats" className="card-container">
                {renderMoats()}
            </div>
            <div id="workshops" className="card-container">
                {renderWorkshops()}
            </div>
            <div id="woodcutters" className="card-container">
                {renderWoodcutters()}
            </div>
            <div id="villages" className="card-container">
                {renderVillages()}
            </div>
            <div id="estates" className="card-container">
                {renderEstates()}
            </div>
            <div id="duchys" className="card-container">
                {renderDuchys()}
            </div>
            <div id="provinces" className="card-container">
                {renderProvinces()}
            </div>
            <div id="smithys" className="card-container">
                {renderSmithys()}
            </div>
            <div id="militias" className="card-container">
                {renderMilitias()}
            </div>
            <div id="remodels" className="card-container">
                {renderRemodels()}
            </div>
            <div id="markets" className="card-container">
                {renderMarkets()}
            </div>
            <div id="mines" className="card-container">
                {renderMines()}
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