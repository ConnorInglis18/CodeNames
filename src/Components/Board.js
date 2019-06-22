import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

class Board extends Component {
    static propTypes = {
        toggleColors: PropTypes.bool.isRequired,
        cards: PropTypes.array.isRequired,
        socket: PropTypes.object.isRequired,
        handleCardClick: PropTypes.func.isRequired,
    }

    render() {

        let coloredCards = this.props.cards.map((data,index) => 
            <Card 
                key={index}
                id={index}
                word={data["word"]}
                displayColor={data["color"]}
                cardColor={data["color"]}
                socket={this.props.socket}
                beenClicked={data["beenClicked"]}
                handleCardClick={this.props.handleCardClick}
            />
        )
        let defaultCards = this.props.cards.map((data,index) =>
            <Card
                key={index}
                id={index}
                word={data["word"]}
                displayColor={"tan"}
                cardColor={data["color"]}
                socket={this.props.socket}
                beenClicked={data["beenClicked"]}
                handleCardClick={this.props.handleCardClick}
            />
        )
        return (
            <React.Fragment>
                {this.props.toggleColors === true
                ?
                <div style={styles.card}>{coloredCards}</div>
                :
                <div style={styles.card}>{defaultCards}</div>
                }
            </React.Fragment>
        )
    }
}

const styles = {
    card: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        height: "90%",
        alignItems: "center",
        width: "90%"
      },
};

export default Board;