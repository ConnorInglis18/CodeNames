import React, { Component } from 'react';
import './../Static/css/App.css';
import Board from './Board.js';
import VerticalStartIndicator from './VerticalStartIndicator';
import HorizontalStartIndicator from './HorizontalStartIndicator';
import WordPackList from './WordPackList.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayer: '',
      toggleColors: true,
      words: [],
      wordPacks: []
    }
    this.toggleView = this.toggleView.bind(this);
    this.handlePacks = this.handlePacks.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Call REST API to get number of likes
    fetch("http://127.0.0.1:5000/api/v1/")
    .then((response) => {
        if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
    .then((data) => {
        this.setState({
            words: data.players,
            firstPlayer: data.firstPlayer,
            wordPacks: data.wordPacks
        })
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  toggleView(event) {
    event.preventDefault();
    this.setState({
      toggleColors: !this.state.toggleColors
    });
  }
  
  // handleChange(event) {
  //   this.setState({
  //     inputValue: event.target.value
  //   });
  // }

  handlePacks(event) {
    event.preventDefault();
    let url = "http://127.0.0.1:5000/api/v1/" + event.target.className;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          words: data.players,
          firstPlayer: data.firstPlayer,
        })
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  render () {

    return (
      <div style={styles.screen}>
        <div className="container">
          <div style={styles.topHalf}>
            <HorizontalStartIndicator firstPlayer={this.state.firstPlayer} />
            <VerticalStartIndicator firstPlayer={this.state.firstPlayer}/>
            <Board toggleColors={this.state.toggleColors} words={this.state.words} />
            <VerticalStartIndicator firstPlayer={this.state.firstPlayer}/>
            <HorizontalStartIndicator firstPlayer={this.state.firstPlayer} />
          </div>
          <div style={styles.bottomHalf}>
            <WordPackList wordPacks={this.state.wordPacks} onClick={this.handlePacks}/>
            <div style={styles.button} onClick={this.toggleView} className="toggle-view">
              <h1>Toggle Colors</h1>
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
    width: "35%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px",
    cursor: "pointer",
  }
};


export default App;