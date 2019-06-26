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
    let lastClueWord = this.props.clueWords[this.props.clueWords.length -1]
    let clueWords = this.props.clueWords.map((data,index) => 
      <p key={index}>{data}</p>
    )
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
      </div>
      <div style={styles.bottomHalf}>
        <div style={styles.leftHalf}>
          {role === "Red Giver" || role === "Blue Giver"
          ?
          <div>
            <form onSubmit={this.props.handleClueWordSubmit}>
              <label>
                Enter Clue:
                <input
                  style={styles.submit}
                  type="text" 
                  className="clueWord"   
                  value={this.props.clueWordValue}
                  onChange={this.props.handleClueWordChange} 
                />
                <input type = "submit" value = "Submit" />
              </label>
            </form>
          </div>
          : null}
          <div>
            <h4>{lastClueWord}</h4>
          </div>
        </div>
        <div>
          {clueWords}
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
    flexDirection: "row"
  },
  leftHalf: {
    display: "flex",
    flexDirection: "column"
  }
}

export default Game;