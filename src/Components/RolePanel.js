import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoleSelector from './RoleSelector';

class RolePanel extends Component {
  static propTypes = {
    handleRoleSelection: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired,
  }

  render() {
    return( 
      <div>
        <RoleSelector
          playerRole="Red_Giver"
          handleRoleSelection={this.props.handleRoleSelection}
          roles={this.props.roles}
        />
        <RoleSelector
          playerRole="Blue_Giver"
          handleRoleSelection={this.props.handleRoleSelection}
          roles={this.props.roles}
        />
        <RoleSelector
          playerRole="Red_Guesser"
          handleRoleSelection={this.props.handleRoleSelection}
          roles={this.props.roles}
        />
        <RoleSelector
          playerRole="Blue_Guesser"
          handleRoleSelection={this.props.handleRoleSelection}
          roles={this.props.roles}
        />
      </div>
    )
  }
}

// const styles = {
  
// };

export default RolePanel;