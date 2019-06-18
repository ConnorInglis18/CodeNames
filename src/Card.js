import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beenClicked: false
        }
    }

    render() {
        return(
            this.props.color == "tan"
            ?
            <div style={Object.assign({}, styles.card, styles.tanColor)}>
                {this.props.word}
            </div>
            :
            this.props.color == "blue"
            ?
            <div style={Object.assign({}, styles.card, styles.blueColor)}>
                {this.props.word}
            </div>
            :
            this.props.color == "red"
            ?
            <div style={Object.assign({}, styles.card, styles.redColor)}>
                {this.props.word}
            </div>
            :
            <div style={Object.assign({}, styles.card, styles.blackColor)}>
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
        color: "black",
        fontSize: "2.1vw",
        fontWeight: "bold",
        borderRadius: "10%",
        textAlign: "center"
    },
    tanColor: {
        backgroundColor: "tan"
    },
    blueColor: {
        backgroundColor: "#6b68ff"
    },
    redColor: {
        backgroundColor: "#ff4e47"
    },
    blackColor: {
        backgroundColor: "grey"
    }
  };

export default Card;