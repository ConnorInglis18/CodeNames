import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WaitingPanel extends Component {
  static propTypes = {
    playerName: PropTypes.string.isRequired,
    lobbyNames: PropTypes.array.isRequired,
    message: PropTypes.string
  }

  render() {
    let lobby = this.props.lobbyNames.map((name,index) => 
      <div style={styles.players} key={index}>{name}</div>
    );

    return( 
      <div style={styles.waitingScreen}>
        <h1>Hi {this.props.playerName}</h1>
        <h2>{this.props.message}</h2>
        <div style={styles.box}>
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
  box: {
    width: "60%",
    height: "60vh",
    backgroundColor: "white"
  },
  players: {
    fontSize: "40px"
  }
}

export default WaitingPanel;