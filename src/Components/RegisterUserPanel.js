import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterUserPanel extends Component {
  static propTypes = {
    registerPlayer: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    playerName: PropTypes.string.isRequired
  }

  render() {
    return( 
      <div style={styles.container}>
        <div style={styles.title}>Welcome to CodeNames</div>
        <div style={styles.credit}>Created by Connor Inglis</div>
        <form onSubmit={this.props.registerPlayer} style={styles.submit}>
          <label>
            <div style={styles.prompt}>Please Enter you Name:</div>
            <input
              style={styles.form}
              type="text" 
              className="playerNameInput"   
              value={this.props.playerName}
              onChange={this.props.handleNameChange} 
            />
            {/* <input type = "submit" value = "Submit" /> */}
          </label>
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
    fontSize: "100px",
    textAlign: "center",
    fontWeight: "bold",
  },
  credit: {
    fontSize: "20px",
    textAlign: "right",
    marginBottom: "100px",
    marginRight: "40px"
  },
  prompt: {
    fontSize: "30px"
  },
  submit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    height: "6vh",
    width: "30vw",
    fontSize: "30px",
  }
}

export default RegisterUserPanel;