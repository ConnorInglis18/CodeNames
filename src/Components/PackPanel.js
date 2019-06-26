import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chevron from './Chevron.js';
import WordPackList from './WordPackList.js';

class PackPanel extends Component {
  static propTypes = {
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    handlePackSelection: PropTypes.func.isRequired,
    webPacksPerPage: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    totalPacks: PropTypes.number.isRequired,
    wordPacks: PropTypes.array.isRequired,
  }

  render() {
    return( 
      <div style={styles.container}>
        <div style={styles.title}>Choose a pack</div>
        <div style={styles.webPacks}>
          <Chevron 
            direction="left" 
            onClick={this.props.previousPage} 
            webPacksPerPage={this.props.webPacksPerPage} 
            pageNumber={this.props.pageNumber} 
            totalPacks={this.props.totalPacks}
          />
          <WordPackList
            wordPacks={this.props.wordPacks}
            handlePackSelection={this.props.handlePackSelection}
            webPacksPerPage={this.props.webPacksPerPage}
            pageNumber={this.props.pageNumber}
          />
          <Chevron 
            direction="right"
            onClick={this.props.nextPage} 
            webPacksPerPage={this.props.webPacksPerPage} 
            pageNumber={this.props.pageNumber} 
            totalPacks={this.props.totalPacks}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: "100px",
  },
  button: {
    display: "flex",
    backgroundColor: "white",
    width: "25%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px",
    cursor: "pointer",
    margin: "5%",
    overflowWrap: "break-word",
    userSelect: "none",
    textAlign: "center",
    padding: "2.5%",
  },
  webPacks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    margin: "5%",
    height: "100px",
  }
};

export default PackPanel;