import React, { Component } from 'react';

class VerticalStartIndicator extends Component {
  render() {
    return(
      <React.Fragment>
        {this.props.firstPlayer === "blue"
        ?
        <div style={Object.assign({}, styles.verticalBar, styles.blueColor)}></div>
        :
        <div style={Object.assign({}, styles.verticalBar, styles.redColor)}></div>
        }
      </React.Fragment>
    )
  }
}

const styles = {
  verticalBar: {
    width: "4%",
    height: "20%",
    marginLeft: ".25%",
    marginRight: ".25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  blueColor: {
    backgroundColor: "#6b68ff"
  },
  redColor: {
    backgroundColor: "#ff4e47"
  }
}

export default VerticalStartIndicator;