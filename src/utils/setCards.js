import store from '../index';
import cardNames from './cardNames';

function setCards(cards) {
    if (!cards.length) return;

    const cardName = cardNames.pop();
    const allCardsOfType = cards.filter(card => {
        return card.name === cardName;
    });

    store.dispatch({ type: cardName.toUpperCase() + 'S', payload: allCardsOfType });

    cards = cards.filter(card => {
        return card.name !== cardName && card.name !== 'Trash';
    });

    return setCards(cards);
};

export default setCards;