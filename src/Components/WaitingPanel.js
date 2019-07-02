import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WaitingPanel extends Component {
  static propTypes = {
    playerName: PropTypes.string.isRequired,
    lobbyNames: PropTypes.array.isRequired,
    message: PropTypes.string,
  }

  render() {
    let lobby = this.props.lobbyNames.map((name,index) => 
      <div className="subtitleText" key={index}>{name}</div>
    );

    return( 
      <div style={styles.waitingScreen}>
        <div style={styles.subtitle} className="subtitleText">Hi {this.props.playerName}</div>
        <div style={styles.message} className="promptText">{this.props.message}</div>
        <div className="nameBox" style={styles.box}>
          {lobby}
        </div>
      </div>
    )
  }
}

const styles = {
  waitingScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  subtitle: {
    marginTop: "5%",
    fontWeight: "bold",
  },
  message: {
    margin: "2%",
    width: "80%",
    whiteSpace: "pre-wrap",
    textAlign: "center"
  },
  box: {
    width: "50%",
    backgroundColor: "white",
    padding: "5%"
  }
}

export default WaitingPanel;