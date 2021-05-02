export default function handleSupplyCard(props) {
    const {
        card, playerTurn, buyCard1, buyCard2, wallet1, wallet2,
        buys1, buys2, gainRemodel1, gainRemodel2, remodelGain, remodelValue,
        workshop, gainWorkshop1, gainWorkshop2
    } = props;

    // BUY SUPPLY CARD
    if (!remodelGain && !workshop) {
        if (
            !playerTurn &&
            buys1 > 0 &&
            card.cost <= wallet1
        ) {
            buyCard1(card);
        } else if (
            playerTurn &&
            buys2 > 0 &&
            card.cost <= wallet2
        ) {
            buyCard2(card);
        }
    }
    // WORKSHOP GAIN CARD
    else if (workshop && card.cost <= 4) {
        if (!playerTurn) {
            gainWorkshop1(card);
        } else if (playerTurn) {
            gainWorkshop2(card);
        }
    }
    // REMODEL GAIN CARD
    else if (remodelGain && card.cost <= remodelValue) {
        if (!playerTurn) {
            gainRemodel1(card);
        } else if (playerTurn) {
            gainRemodel2(card);
        }
    }
};