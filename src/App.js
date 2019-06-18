import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: [],
      firstPlayer: '',
      buttonClicked: true,
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
          inputValue: data.players,
          firstPlayer: data.firstPlayer,
        })
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  toggleView(event) {
    event.preventDefault();
    this.setState({
      buttonClicked: !this.state.buttonClicked
    });
  }
  
  // handleChange(event) {
  //   this.setState({
  //     inputValue: event.target.value
  //   });
  // }

  handlePacks(event) {
    event.preventDefault();
    let url = "http://127.0.0.1:5000/api/v1" + event.target.className;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          inputValue: data.players,
          firstPlayer: data.firstPlayer,
        })
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  render () {
    let players = this.state.inputValue.map((data,index) => 
      <Card key={index} word={data[0]} displayColor={data[1]} cardColor={data[1]} beenClicked={false} />
    )

    let defaultCards = this.state.inputValue.map((data,index) =>
      <Card key={index} word={data[0]} displayColor={"tan"} cardColor={data[1]} beenClicked={false}/>
    )

    return (
      // <div>
      //   <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
      //   <RenderInput input={this.state.inputValue} />
      // </div>
      // <div>
      //  <Player name={"Rashford"} points={15} />
      // </div>
      <div style={styles.screen}>
        <div className="container">
          <div style={styles.topHalf}>
            {this.state.firstPlayer === "blue"
            ?
            <div style={Object.assign({}, styles.topBar, styles.blueColor)}></div>
            :
            <div style={Object.assign({}, styles.topBar, styles.redColor)}></div>
            }
            {this.state.firstPlayer === "blue"
            ?
            <div style={Object.assign({}, styles.leftBar, styles.blueColor)}></div>
            :
            <div style={Object.assign({}, styles.leftBar, styles.redColor)}></div>
            }
            {this.state.buttonClicked === true
            ?
            <div style={styles.cards}>
              {players}
            </div>
            :
            <div style={styles.cards}>
              {defaultCards}
            </div>
            }
            
            {this.state.firstPlayer === "blue"
            ?
            <div style={Object.assign({}, styles.rightBar, styles.blueColor)}></div>
            :
            <div style={Object.assign({}, styles.rightBar, styles.redColor)}></div>
            }
            {this.state.firstPlayer === "blue"
            ?
            <div style={Object.assign({}, styles.bottomBar, styles.blueColor)}></div>
            :
            <div style={Object.assign({}, styles.bottomBar, styles.redColor)}></div>
            }
          </div>
          <div style={styles.bottomHalf}>
            <div style={styles.packContainer}>
              <ul style={styles.packs}>
                <li className="/Default" onClick={this.handlePacks}>Default</li>
                <li className="/Premier_League" onClick={this.handlePacks}>Premier League</li>
                <li className="/Clear" onClick={this.clearBoard}>Clear Board</li>
                <li className="/Sports_Teams" onClick={this.handlePacks}>Sports Teams</li>
                <li className="/NSFW" onClick={this.handlePacks}>NSFW</li>
                <li className="/Create_Pack" onClick={this.handlePacks}>Create Pack</li>
              </ul>
            </div>
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
  topBar: {
    width: "20%",
    marginRight: "40%",
    marginLeft: "40%",
    height: "4%",
    marginTop: ".5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  leftBar: {
    width: "4%",
    height: "20%",
    marginLeft: ".5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  rightBar: {
    width: "4%",
    height: "20%",
    marginRight: ".5%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "red"
  },
  bottomBar: {
    width: "20%",
    height: "4%",
    marginBottom: ".5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  cards: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    height: "90%",
    alignItems: "center",
    width: "90%"
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
  },
  blueColor: {
    backgroundColor: "#6b68ff"
  },
  redColor: {
    backgroundColor: "#ff4e47"
  },
  packContainer: {
    display: "flex",
    width: "60%",
    height: "100%"
  },
  packs: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "stretch",
    listStyle: "none",
    width: "100%",
    height: "80%",
    marginRight: "5%",
    cursor: "pointer",
    paddingLeft: "0",
  }
};


export default App;