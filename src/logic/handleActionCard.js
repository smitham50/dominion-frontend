export default function handleActionCard(props) {
    const {
        playAction1, playAction2, actions1, actions2,
        triggerDispatch1, triggerDispatch2, deck1, deck2,
        player, playerTurn, card
    } = props;

    if (player === "1" && !playerTurn && actions1 > 0) {
        playAction1(card, deck1)
        card.triggers.forEach(trigger => {
            triggerDispatch1(`${trigger}1`)
        })
    } else if (player === "2" && playerTurn && actions2 > 0) {
        playAction2(card, deck2)
        card.triggers.forEach(trigger => {
            triggerDispatch2(`${trigger}2`)
        })
    }
}