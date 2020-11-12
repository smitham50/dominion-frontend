import handleTreasureCard from './handleTreasureCard';
import handleActionCard from './handleActionCard';
import handleRemodel from './handleRemodel';

export default function handleHandCard(props) {
    const { 
        player,  hand1, hand2, militia, militiaDefend1, militiaDefend2,
        militiaDiscardFirst, militiaDiscardSecond, militiaDiscardFirst1, 
        militiaDiscardFirst2, militiaDiscardSecond1, militiaDiscardSecond2,
        militiaBreak, cellar1, cellar2, cellarDiscard1, cellarDiscard2,
        card, playerTurn, remodel
    } = props;

    if (!militia && !militiaDiscardSecond) {
        // PLAY TREASURE CARD OR TRASH TREASURE CARD IF MINE OR REMODEL PLAYED
        if (!cellar1 && !cellar2) {
            if (card.card_type === "Treasure") {
                handleTreasureCard(props);
            }
            // PLAY ACTION CARD
            else if (card.card_type === "Action" && !remodel) {
                handleActionCard(props);
            }
            // REMODEL ACTION OR VICTORY CARD
            else if (
                remodel &&
                (card.card_type === "Action" || card.card_type === "Victory")
            ) {
                handleRemodel(props);
            }
        }
        // CELLAR
        else if (
            cellar1 &&
            player === "player1" &&
            !playerTurn
        ) {
            cellarDiscard1(card)
        } else if (
            cellar2 &&
            player === "player2" &&
            playerTurn
        ) {
            cellarDiscard2(card)
        }
    }
    // MILITIA RESPONSES
    // MOAT OR MILITIA DISCARD FIRST
    else if (militia && militiaDiscardFirst) {
        if (!playerTurn && player === "player2") {
            if (card.name !== "Moat") {
                militiaDiscardFirst1(card)
            } else {
                militiaDefend1(card)
            }
        } else if (playerTurn && player === "player1") {
            if (card.name !== "Moat") {
                militiaDiscardFirst2(card)
            } else {
                militiaDefend2(card)
            }
        }
    }
    // MILITIA DISCARD SECOND
    else if (militiaDiscardSecond) {
        if (
            !playerTurn &&
            player === "player2" &&
            hand2.length > 3
        ) {
            militiaDiscardSecond1(card)
        } else if (
            playerTurn &&
            player === "player1" &&
            hand1.length > 3
        ) {
            militiaDiscardSecond2(card)
        } else if (hand1.length <= 3 || hand2.length <= 3) {
            militiaBreak()
        }
    }
}