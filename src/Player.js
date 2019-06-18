import React, { Component } from 'react';
import jersey from './Static/jersey.jpg';

class Player extends Component {
    render() {
        return (
            <div style={styles.card}>
                <img src={jersey} alt="jersey" style={styles.jersey} />
                <div style={styles.name}>{this.props.name}</div>
                <div style={styles.points}>{this.props.points}</div>
            </div>
        )
    }
}

const styles = {
    card: {
        width: "10vw",
        height: "10vw",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column"

    },
    jersey: {
        width: "100%"
    },
    name: {
        backgroundColor: "rgba(0,111,55,0.9)",
        justifyContent: "center",
        color: "white",
        fontFamily: "PremierSans-Bold Arial Helvetica Neue Helvetica sans-serif",
        fontWeight: "bold",
        fontSize: "1vw",
        textAlign: "center",
        padding: ".1rem .2rem",
        margin: "0",
        height: "100%"
    },
    points: {
        backgroundColor: "#00ff87",
        justifyContent: "center",
        display: "flex",
        borderBottomLeftRadius: "3px",
        borderBottomRightRadius: "3px",
        fontFamily: "PremierSans-Bold Arial Helvetica Neue Helvetica sans-serif",
        fontWeight: "normal",
        padding: "0 .2rem",
        paddingTop: ".1rem",
        paddingBottom: ".1rem",
        fontSize: "1.2rem",
        margin: "0",
        height: "90%"
    }
};

export default Player;