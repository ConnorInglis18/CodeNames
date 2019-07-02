import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterUserPanel extends Component {
  static propTypes = {
    handleNameSubmit: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    playerName: PropTypes.string.isRequired
  }

  render() {
    return( 
      <div style={styles.container}>
        <div className="titleText" style={styles.title}>Welcome to CodeNames</div>
        <div className="creditText" style={styles.credit}>Created by Connor Inglis</div>
        <form onSubmit={this.props.handleNameSubmit} style={styles.submit}>
          <div className="promptText" style={styles.prompt}>Please Enter Your Name:</div>
          <input
            style={styles.form}
            type="text"
            autoFocus={true}
            className="playerNameInput"   
            value={this.props.playerName}
            onChange={this.props.handleNameChange} 
          />
        </form>
      </div>
    )
  }
}

const styles = {
  container: {
    width: "80%",
    marginLeft: "10%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  credit: {
    textAlign: "right",
    marginBottom: "100px",
    marginRight: "40px"
  },
  prompt: {
    width: "70%",
    marginRight: "20%"
  },
  submit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  form: {
    width: "90%",
  }
}

export default RegisterUserPanel;