import store from '../index';
import cardNames from './cardNames';

function setCards(cards) {
    for (let cardName of cardNames) {
        const allCardsofType = cards.filter(card => {
            return card.name === cardName;
        });

        store.dispatch({ type: cardName.toUpperCase() + 'S', payload: allCardsofType });
    };
};

export default setCards;