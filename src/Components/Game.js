import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js';
import VerticalStartIndicator from './VerticalStartIndicator';
import HorizontalStartIndicator from './HorizontalStartIndicator';

class Game extends Component {
  static propTypes = {
    firstColor: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    socket: PropTypes.object.isRequired,
    handleCardClick: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired,
    clueWordValue: PropTypes.string.isRequired,
    clueWords: PropTypes.array.isRequired,
    handleClueWordSubmit: PropTypes.func.isRequired,
    handleClueWordChange: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    const differentCards = this.props.cards !== nextProps.cards;
    const differentClueWordValue = this.props.clueWordValue !== nextProps.clueWordValue;
    const differentClueWords = this.props.clueWords !== nextProps.clueWords;
    return differentCards || differentClueWordValue || differentClueWords;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state,nextProps})
  }

  render() {
    let role = this.props.role.replace(/_/g, ' ')

    let clueWords = this.props.clueWords.map((data,index) => {
      let name = data.slice(0,data.search("_"));
      let clue = data.slice(data.search("_")+1,data.length);
      console.log(name)
      return <div key={index} style={styles.clueWord}>
          <div style={styles.name} className="smallText">
            <b>{name}</b>
          </div>
          <div style={styles.clue} className="smallText">
            {clue}
          </div>
        </div>
    })
    let clueWordsFive = clueWords.reverse().slice(0,5);
    
    let name = this.props.clueWords.length === 0 ? "" : this.props.clueWords[this.props.clueWords.length-1].slice(0,this.props.clueWords[this.props.clueWords.length-1].search("_"));
    let clue = this.props.clueWords.length === 0 ? "" : this.props.clueWords[this.props.clueWords.length-1].slice(this.props.clueWords[this.props.clueWords.length-1].search("_")+1,this.props.clueWords[this.props.clueWords.length-1].length);

    return(
      <>
        <div style={styles.topHalf}>
          <HorizontalStartIndicator firstColor={this.props.firstColor} />
          <VerticalStartIndicator firstColor={this.props.firstColor}/>
          <Board
            cards={this.props.cards}
            socket={this.props.socket}
            handleCardClick={this.props.handleCardClick}
            role={this.props.role}
          />
          <VerticalStartIndicator firstColor={this.props.firstColor}/>
          <HorizontalStartIndicator firstColor={this.props.firstColor} />
      ` </div>
        <div style={styles.bottomHalf}>
          {role === "Red Giver" || role === "Red Guesser" ? (
            <div className="creditText" style={Object.assign({}, styles.leftPanel, styles.redBackground)}>
              {`Your Role:\n${role}`}
            </div>
          ) : (
            <div className="creditText" style={Object.assign({}, styles.leftPanel, styles.blueBackground)}>
              {`Your Role:\n${role}`}
            </div>
          )}
          <div style={styles.centerPanel}>
            {role === "Red Giver" || role === "Blue Giver"
            ?
            <div>
              <form onSubmit={this.props.handleClueWordSubmit}>
                <div className="creditText">
                  Enter Clue:
                </div>
                <input
                  style={styles.submitWord}
                  type="text" 
                  className="submitWordBox"  
                  value={this.props.clueWordValue}
                  onChange={this.props.handleClueWordChange} 
                />
              </form>
            </div>
            : null}
            {role === "Red Giver" || role === "Blue Giver" ? (
              <div className="creditText">
                {name} {clue}
              </div>
            ) : (
              <div style={styles.guesserClue}>
                <div className="creditText">
                  {name}
                </div>
                <div className="promptText">
                  {clue}
                </div>
              </div>
            )}
            
          </div>
          <div style={styles.rightPanel}>
            {clueWordsFive}
          </div>
        </div>
    </>
      
    )
  }
}

const styles = {
  topHalf: {
    display: "flex",
    flexFlow: "row wrap",
    height: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomHalf: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: "2%",
    width: "100%",
    height: "18%",
  },
  leftPanel: {
    width: "25%",
    margin: "2%",
    padding: "2%",
    whiteSpace: "pre-wrap",
  },
  blueBackground: {
    backgroundColor: "#6b68ff",
  },
  redBackground: {
    backgroundColor: "#ff4e47",
  },
  centerPanel: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    margin: "2%",
    padding: "2%",
    backgroundColor: "tan"
  },
  rightPanel: {
    width: "25%",
    margin: "2%",
    padding: "2%",
    backgroundColor: "white"
  },
  submitWord: {
    marginBottom: "2%"
  },
  clueWord: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    width: "40%"
  },
  clue: {
    width: "60%"
  },
  guesserClue: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
  }
}

export default Game;