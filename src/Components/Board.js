import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

class Board extends Component {
    static propTypes = {
        toggleColors: PropTypes.bool.isRequired,
        words: PropTypes.array.isRequired
    }
    
    render() {
        let players = this.props.words.map((data,index) => 
            <Card key={index} word={data[0]} displayColor={data[1]} cardColor={data[1]} />
        )
        let defaultCards = this.props.words.map((data,index) =>
            <Card key={index} word={data[0]} displayColor={"tan"} cardColor={data[1]} />
        )
        return (
            <React.Fragment>
                {this.props.toggleColors === true
                ?
                <div style={styles.cards}>{players}</div>
                :
                <div style={styles.cards}>{defaultCards}</div>
                }
            </React.Fragment>
        )
    }
}

const styles = {
    cards: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        height: "90%",
        alignItems: "center",
        width: "90%"
      },
};

export default Board;