import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Static/css/Card.css';

class Card extends Component {
    static propTypes = {
        word: PropTypes.string.isRequired,
        displayColor: PropTypes.string.isRequired,
        cardColor: PropTypes.string.isRequired,
        socket: PropTypes.object.isRequired,
        id: PropTypes.number.isRequired,
        beenClicked: PropTypes.string.isRequired,
        handleCardClick: PropTypes.func.isRequired
    }
    
    render() {
        const beenClicked = this.props.beenClicked === "true"
        return(
            (beenClicked === true && this.props.cardColor === "tan")
            ?
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedTanColor)}>
                {this.props.word}
            </div>
            :
            (beenClicked === true && this.props.cardColor === "blue")
            ?
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedBlueColor)}>
                {this.props.word}
            </div>
            :
            (beenClicked === true && this.props.cardColor === "red")
            ?
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedRedColor)}>
                {this.props.word}
            </div>
            :
            (beenClicked === true && this.props.cardColor === "black")
            ?
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedBlackColor)}>
                {this.props.word}
            </div>
            :
            this.props.displayColor === "tan"
            ?
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.tanColor)}>
                {this.props.word}
            </div>
            :
            this.props.displayColor === "blue"
            ?
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.blueColor)}>
                {this.props.word}
            </div>
            :
            this.props.displayColor === "red"
            ?
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.redColor)}>
                {this.props.word}
            </div>
            :
            <div id={this.props.id} onClick={this.props.handleCardClick} className="card"
            style={Object.assign({}, styles.card, styles.blackColor)}>
                {this.props.word}
            </div>
        )
    }
}

const styles = {
    card: {
        width: "12%",
        height: "12%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        borderRadius: "10%",
        textAlign: "center",
        cursor: "pointer",
        padding: "3%",
        userSelect: "none",
        overflowWrap: "break-word",
    },
    tanColor: {
        backgroundColor: "tan",
        color: "black"
    },
    clickedTanColor: {
        backgroundColor: "#936a39",
        color: "#936a39"
    },
    blueColor: {
        backgroundColor: "#6b68ff",
        color: "white"
    },
    clickedBlueColor: {
        backgroundColor: "#0400ff",
        color: "#0400ff"
    },
    redColor: {
        backgroundColor: "#ff4e47",
        color: "white"
    },
    clickedRedColor: {
        backgroundColor: "#e60800",
        color: "#e60800"
    },
    blackColor: {
        backgroundColor: "grey",
        color: "black"
    },
    clickedBlackColor: {
        backgroundColor: "black",
        color: "black"
    },
  };

export default Card;