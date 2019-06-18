import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beenClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            beenClicked: !this.state.beenClicked
        });
    }

    render() {
        return(
            (this.state.beenClicked === true && this.props.cardColor === "tan")
            ?
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedTanColor)}>
                {this.props.word}
            </div>
            :
            (this.state.beenClicked === true && this.props.cardColor === "blue")
            ?
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedBlueColor)}>
                {this.props.word}
            </div>
            :
            (this.state.beenClicked === true && this.props.cardColor === "red")
            ?
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedRedColor)}>
                {this.props.word}
            </div>
            :
            (this.state.beenClicked === true && this.props.cardColor === "black")
            ?
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.clickedBlackColor)}>
                {this.props.word}
            </div>
            :
            this.props.displayColor === "tan"
            ?
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.tanColor)}>
                {this.props.word}
            </div>
            :
            this.props.displayColor === "blue"
            ?
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.blueColor)}>
                {this.props.word}
            </div>
            :
            this.props.displayColor === "red"
            ?
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.redColor)}>
                {this.props.word}
            </div>
            :
            <div onClick={this.handleClick} className="card"
            style={Object.assign({}, styles.card, styles.blackColor)}>
                {this.props.word}
            </div>
        )
    }
}

const styles = {
    card: {
        width: "18%",
        height: "18%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        borderRadius: "10%",
        textAlign: "center"
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