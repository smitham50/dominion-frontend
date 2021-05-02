export default function handleRemodel(props) {
    const {
        trashRemodel1, trashRemodel2, player,
        playerTurn, card
    } = props;

    if (player === "player1" && !playerTurn) {
        trashRemodel1(card);
    } else if (player === "player2" && playerTurn) {
        trashRemodel2(card);
    }
}