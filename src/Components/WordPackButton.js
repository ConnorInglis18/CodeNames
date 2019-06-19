import React, { Component } from 'react';
import '../Static/css/WordPackButton.css';

class WordPackButton extends Component {
    render() {  
        let display_name = this.props.wordPack.replace(/_/g," ");
        return (
            <div id="wordPackButton" className={this.props.wordPack} onClick={this.props.onClick} style={styles.button}>
                {display_name}
            </div>
        )
    }
}

const styles = {
  button: {
    display: "flex",
    backgroundColor: "white",
    width: "25%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px",
    cursor: "pointer",
    margin: "1%",
    fontWeight: "bold", 
    padding: "1%",
    userSelect: "none",
    textAlign: "center"
  }
};

export default WordPackButton;