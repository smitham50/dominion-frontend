export default function handleRemodel(props) {
    const {
        trashRemodel1, trashRemodel2, player,
        playerTurn, card
    } = props;

    if (player === "1" && !playerTurn) {
        trashRemodel1(card);
    } else if (player === "2" && playerTurn) {
        trashRemodel2(card);
    }
}