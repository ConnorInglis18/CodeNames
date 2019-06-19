import React, { Component } from 'react';
import WordPackButton from './WordPackButton.js';
import PropTypes from 'prop-types';

class WordPackList extends Component {
    static propTypes = {
        wordPacks: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired,
        webPacksPerPage: PropTypes.number.isRequired,
        pageNumber: PropTypes.number.isRequired,
      }
    
    render() {
        let wordPacks = this.props.wordPacks.map((data,index) => 
            <WordPackButton key={index} wordPack={data} onClick={this.props.onClick}/>
        )

        let lowerBound = this.props.webPacksPerPage * (this.props.pageNumber-1);
        let upperBound = this.props.webPacksPerPage * (this.props.pageNumber);
        wordPacks = wordPacks.slice(lowerBound,upperBound);
        
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
    alignItems: "center",
    width: "80%",
    height: "100%",
    cursor: "pointer",
  }
};

export default WordPackList;