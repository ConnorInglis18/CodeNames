import React, { Component } from 'react';
import WordPackButton from './WordPackButton.js';

class WordPackList extends Component {
    render() {
        let wordPacks = this.props.wordPacks.map((data,index) => 
            <WordPackButton key={index} wordPack={data} onClick={this.props.onClick}/>
        )
        
        return (
            <div style={styles.packs}>
                {wordPacks}
            </div>
        )
    }
}

const styles = {
  packs: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "100%",
    height: "80%",
    marginRight: "5%",
    cursor: "pointer",
    paddingLeft: "0"
  }
};

export default WordPackList;