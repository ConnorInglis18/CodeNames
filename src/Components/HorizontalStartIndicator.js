import React, { Component } from 'react';

class HorizontalStartIndicator extends Component {
  render() {
    return(
      <React.Fragment>
        {this.props.firstPlayer === "blue"
        ?
        <div style={Object.assign({}, styles.horizontalBar, styles.blueColor)}></div>
        :
        <div style={Object.assign({}, styles.horizontalBar, styles.redColor)}></div>
        }
      </React.Fragment>
    )
  }
}

const styles = {
  horizontalBar: {
    width: "20%",
    marginRight: "40%",
    marginLeft: "40%",
    height: "4.75%",
    marginTop: ".5%",
    marginBottom: ".5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blueColor: {
    backgroundColor: "#6b68ff"
  },
  redColor: {
    backgroundColor: "#ff4e47"
  }
}

export default HorizontalStartIndicator;