import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoleSelector extends Component {
  static propTypes = {
    playerRole: PropTypes.string.isRequired,
    handleRoleSelection: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired
  }

  render() {
    let isRoleTaken = this.props.roles.indexOf(this.props.playerRole) >= 0;
    let role = this.props.playerRole.replace(/_/g, ' ');
    return( 

      <div style={styles.panel}>
        {!isRoleTaken
        ?
        <div style={styles.button} className={this.props.playerRole} onClick={this.props.handleRoleSelection}>
          Select Role
        </div>
        :
        <div style={Object.assign({},styles.button,styles.greyButton)}>
          Role Taken
        </div>
        }
        <h2>{role}</h2>
      </div>
    )
  }
}

const styles = {
  panel: {
    display: "flex",
    alignItems: "center"
  },
  button: {
    display: "flex",
    backgroundColor: "green",
    width: "25%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px",
    cursor: "pointer",
    margin: "5%",
    fontWeight: "bold", 
    padding: "1%",
    userSelect: "none",
    textAlign: "center",
    color: "white"
  },
  greyButton: {
    color: "grey",
    backgroundColor: "darkgrey"
  }
};

export default RoleSelector;