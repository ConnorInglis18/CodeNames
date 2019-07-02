import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LobbySelection extends Component {
  static propTypes = {
    gameIdRandom: PropTypes.string.isRequired,
    gameIdInput: PropTypes.string.isRequired,
    handleGameIdChange: PropTypes.func.isRequired,
    handleGameIdSubmit: PropTypes.func.isRequired
  }

  render() {
    return(
      <div style={styles.container}>
        <p style={styles.subtitle} className="subtitleText">
          You can either create your own room, or join a friends
        </p>
        <div style={styles.idBox}>
          <div className="promptText">Your Game ID:</div>
          <form style={styles.input} onSubmit={this.props.handleGameIdSubmit}>
            <input
              style={styles.noSubmit}
              type="text" 
              className="playerNameInput"   
              readOnly value={this.props.gameIdRandom}
            />
            <input style={styles.submitButton} type="submit" value="Create Game" />
          </form>
        </div>
        <div style={styles.idBox}>
          <div className="promptText">Enter Friend's ID:</div>
          <form style={styles.input} onSubmit={this.props.handleGameIdSubmit}>
            <input
              style={styles.submit}
              type="text"
              autoFocus={true}
              className="playerNameInput"   
              value={this.props.gameIdInput}
              onChange={this.props.handleGameIdChange} 
            />
            <input style={styles.submitButton} type="submit" value="Join Game" />
          </form>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  subtitle: {
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "5%"
  },
  idBox: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2%"
  },
  input: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%"
  },
  noSubmit: {
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    borderWidth: 0,
    textAlign: "center"
  },
  submitButton: {
    marginTop: "2%",
    width: "50%",
    marginBottom: "10%"
  },
  submit: {
    width: "50%"
  }
}

export default LobbySelection;