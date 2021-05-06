export default function handleTreasureCard(props) {
    const {
        playTreasureCard1, playTreasureCard2, trashTreasure1,
        trashTreasure2, mine, card, remodel, trashRemodel1,
        trashRemodel2, player, playerTurn
    } = props;

    if (player === "1" && !playerTurn) {
        if (!mine && !remodel) {
            debugger
            playTreasureCard1(card)
        } else if (mine) {
            if (card.name === "Copper") {
                trashTreasure1(card, "silvers")
            } else if (card.name === "Silver") {
                trashTreasure1(card, "golds")
            }
        } else if (remodel) {
            trashRemodel1(card)
        }
    }
    else if (player === "2" && playerTurn) {
        if (!mine && !remodel) {
            playTreasureCard2(card)
        } else if (mine) {
            if (card.name === "Copper") {
                trashTreasure2(card, "silvers")
            } else if (card.name === "Silver") {
                trashTreasure2(card, "golds")
            }
        } else if (remodel) {
            trashRemodel2(card)
        }
    }
}