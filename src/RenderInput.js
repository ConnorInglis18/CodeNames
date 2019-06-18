import React, { Component } from 'react'

class RenderInput extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <h3 style={styles.formatting}>Input Render:</h3>
            <p style={styles.testing}>{this.props.input}</p>
          </div>
        );
      }
};

const styles = {
    formatting: {
        display: "flex",
        color: "red"
    },
    testing: {
        color: "blue"
    }
};

export default RenderInput;