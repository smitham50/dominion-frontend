import React from 'react';
import PlayerDeck from './PlayerDeck';
import PlayerDiscard from './PlayerDiscard';
import PlayerHand from './PlayerHand';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PlayerCardsContainer = styled.div`
    width: 43%;
    height: 100%;
    display: flex;
`;

const PlayerArea = (props) => {
    const {
        deck1,
        deck2,
        discard1,
        discard2,
        hand1,
        hand2,
        turns1,
        turns2,
        deal,
        draw,
        cycle,
        player
    } = props;

    return (
        <PlayerCardsContainer>
            {
                player === "1" 
                ?
                <>
                    <PlayerDiscard
                        key={player === "1" ? "discard1" : "discard2"}
                        discard={player === "1" ? discard1 : discard2}
                        player={player}
                    />
                    <PlayerDeck
                        key={player === "1" ? "deck1" : "deck2"}
                        deck={player === "1" ? deck1 : deck2}
                        handleDeal={deal}
                        player={player}
                        turns={player === "1" ? turns1 : turns2}
                        handleCycle={cycle}
                    />
                    <PlayerHand
                        key={player === "1" ? "hand1" : "hand2"}
                        hand={player === "1" ? hand1 : hand2}
                        handleDraw={draw}
                        player={player}
                        turns={player === "1" ? turns1 : turns2}
                        deck={player === "1" ? deck1 : deck2}
                    />
                </>
                :
                <>
                    <PlayerHand
                        key={player === "1" ? "hand1" : "hand2"}
                        hand={player === "1" ? hand1 : hand2}
                        handleDraw={draw}
                        player={player}
                        turns={player === "1" ? turns1 : turns2}
                        deck={player === "1" ? deck1 : deck2}
                    />
                    <PlayerDeck
                        key={player === "1" ? "deck1" : "deck2"}
                        deck={player === "1" ? deck1 : deck2}
                        handleDeal={deal}
                        player={player}
                        turns={player === "1" ? turns1 : turns2}
                        handleCycle={cycle}
                    />
                    <PlayerDiscard
                        key={player === "1" ? "discard1" : "discard2"}
                        discard={player === "1" ? discard1 : discard2}
                        player={player}
                    />
                </>
            }
        </PlayerCardsContainer>
    );
};

function msp(state) {
    const { 
        deck1,
        deck2,
        discard1,
        discard2, 
        hand1, 
        hand2,
    } = state.supply;

    const { turns1 } = state.playerOne;
    const { turns2 } = state.playerTwo;

    return {
        deck1,
        deck2,
        discard1,
        discard2,
        hand1,
        hand2,
        turns1,
        turns2
    };
};

function mdp(dispatch) {
    return {
        deal: (player) => {
            dispatch({ type: player === "1" ? "DEAL1" : "DEAL2" })
        },
        draw: (player) => {
            dispatch({ type: player === "1" ? "DRAW1" : "DRAW2" })
        },
        cycle: (player) => {
            dispatch({ type: player === "1" ? "CYCLE1" : "CYCLE2" })
        }
    };
};

export default connect(msp, mdp)(PlayerArea);