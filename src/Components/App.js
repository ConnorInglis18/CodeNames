import React, { Component } from 'react';
import './../Static/css/App.css';
import Board from './Board.js';
import VerticalStartIndicator from './VerticalStartIndicator';
import HorizontalStartIndicator from './HorizontalStartIndicator';
import WordPackList from './WordPackList.js';
import PropTypes from 'prop-types';
import Chevron from './Chevron.js';
import openSocket from 'socket.io-client';

// const socketUrl = "localhost:3231"
class App extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    webPacksPerPage: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      socket: openSocket('http://localhost:3231'),
      firstPlayer: '',
      toggleColors: true,
      cards: [],
      wordPacks: [],
      pageNumber: 1,
      totalPacks: 0,
      role: '',

    }

    //let self = this
    this.state.socket.on('board', board => {
      console.log("BOARD: " + board);
      //this.setState(...self.state, {board: board})
    });
    this.state.socket.on('turn', color => {
      console.log("COLOR: " + color);
      //this.setState(...self.state, {color: color})
    });
    this.state.socket.on('assignRole', player => {
      this.setState({role: player});
      if (player === "redGuesser" || player === "blueGuesser") {
        this.setState({toggleColors:false});
      }
    });
    this.state.socket.on('tileClicked', tileId => {
      const cardsCopy = Object.assign([], this.state.cards);
      cardsCopy[tileId]["beenClicked"] = cardsCopy[tileId]["beenClicked"] === "true" ? "false" : "true"
      this.setState({
          cards: cardsCopy
      });
    })
  }

  componentDidMount() {
    // Call REST API to get number of likes
    fetch(this.props.url)
    .then((response) => {
        if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
    .then((data) => {
        this.setState({
            cards: data.cards,
            firstPlayer: data.firstPlayer,
            wordPacks: data.wordPacks,
            totalPacks: data.totalPacks,
            gameId: ''
        })
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  toggleView = event => {
    event.preventDefault();
    this.setState({
      toggleColors: !this.state.toggleColors
    });
  }

  handlePacks = event => {
    event.preventDefault();
    let url = this.props.url + event.target.className;
    this.state.socket.emit('click', 4);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          cards: data.cards,
          firstPlayer: data.firstPlayer,
        })
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  previousPage = event => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  }

  nextPage = event => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  handleCardClick = event => {
    this.state.socket.emit('click', event.target.id);
  }

  render () {
    return (
      <div style={styles.screen}>
        <div className="container">
          <div style={styles.topHalf}>
            <HorizontalStartIndicator firstPlayer={this.state.firstPlayer} />
            <VerticalStartIndicator firstPlayer={this.state.firstPlayer}/>
            <Board toggleColors={this.state.toggleColors} cards={this.state.cards} socket={this.state.socket} handleCardClick={this.handleCardClick}/>
            <VerticalStartIndicator firstPlayer={this.state.firstPlayer}/>
            <HorizontalStartIndicator firstPlayer={this.state.firstPlayer} />
          </div>
          <div style={styles.bottomHalf}>
            <div style={styles.webPacks}>
              <Chevron direction="left" 
                onClick={this.previousPage} 
                webPacksPerPage={this.props.webPacksPerPage} 
                pageNumber={this.state.pageNumber} 
                totalPacks={this.state.totalPacks}
              />
              <WordPackList wordPacks={this.state.wordPacks} onClick={this.handlePacks} webPacksPerPage={this.props.webPacksPerPage} pageNumber={this.state.pageNumber} />
              <Chevron direction="right"
                onClick={this.nextPage} 
                webPacksPerPage={this.props.webPacksPerPage} 
                pageNumber={this.state.pageNumber} 
                totalPacks={this.state.totalPacks}
              />
            </div>
            <div style={styles.button} onClick={this.toggleView} className="toggle-view">
              <h1>{this.state.role}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  screen: {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  topHalf: {
    display: "flex",
    flexFlow: "row wrap",
    height: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomHalf: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20%"
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
    height: "40%"
  }
};


export default App;