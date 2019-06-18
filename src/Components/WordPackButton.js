import React, { Component } from 'react';

class WordPackButton extends Component {
    render() {  
        let display_name = this.props.wordPack.replace(/_/g," ");
        return (
            <div className={this.props.wordPack} onClick={this.props.onClick} style={styles.button}>
                {display_name}
            </div>
        )
    }
}

const styles = {
  button: {
    display: "flex",
    backgroundColor: "white",
    width: "18%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px",
    cursor: "pointer",
    margin: "1%",
    fontWeight: "bold", 
    padding: "1%",
    fontSize: "18px",
  }
};

export default WordPackButton;