import React, { Component } from 'react';
import './../Static/css/App.css';
import Game from './Game.js';
import PropTypes from 'prop-types';
import openSocket from 'socket.io-client';
import RegisterUserPanel from './RegisterUserPanel.js';
import WaitingPanel from './WaitingPanel.js';
import RolePanel from './RolePanel.js';
import PackPanel from './PackPanel.js';
import LobbySelection from './LobbySelection.js';
//import heartbeats from 'heartbeats'

class App extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    socketUrl: PropTypes.string.isRequired,
    webPacksPerPage: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      clueWords: [],
      clueWordValue: '',
      firstColor: '',
      gameId: '',
      gameIdRandom: '',
      gameIdInput: '',
      herokuGood: false,
      isFirstPlayer: false,
      lobbyNames: [],
      packType: '',
      pageNumber: 1,
      playerName: '',
      playerRegistered: false,
      role: '',
      rolesChosen: [],
      socket: openSocket(this.props.socketUrl),
      toggleColors: true,
      totalPacks: 0,
      wordPacks: []
    }

    this.state.socket.on("message", message => {
      console.log("MESSAGE: " + message);
    });

    this.state.socket.on('gameIdRandom', gameIdRandom => {
      this.setState({gameIdRandom: gameIdRandom});
    });

    this.state.socket.on("firstPlayer", isFirstPlayer => {
      this.setState({isFirstPlayer: isFirstPlayer});
      this.getPacks();
    });

    this.state.socket.on("playerCount", lobbyList => {
      this.setState({lobbyNames: lobbyList});
    });

    this.state.socket.on("registerUserRole", playerRole => {
      this.setState({role:playerRole});
    });

    this.state.socket.on("registerNewGameRoll", roles => {
      this.setState({rolesChosen: roles});
    })

    this.state.socket.on("getGameBoard", content => {
      this.setState({packType: content["pack"]});
      setTimeout(() => this.getBoard(content["url"]), 500);
    })

    this.state.socket.on('cardClicked', tileId => {
      const cardsCopy = Object.assign([], this.state.cards);
      cardsCopy[tileId]["beenClicked"] = cardsCopy[tileId]["beenClicked"] === "true" ? "false" : "true"
      this.setState({
          cards: cardsCopy
      });
    });

    this.state.socket.on("clueWordGiven", clueWordValue => {
      let clueWordsCopy = Object.assign([],this.state.clueWords);
      clueWordsCopy.push(clueWordValue);
      this.setState({clueWords: clueWordsCopy, clueWordValue: ""});
    })

    this.state.socket.on('deleteAllGames', () => {
      this.deleteAllGames()
    });

    this.state.socket.on("deleteGame", gameId => {
      let url = this.props.url + "deleteGame/" + gameId;
      fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
      .then((data) => {})
      .catch(error => console.log(error)); // eslint-disable-line no-console 
    })

    this.state.socket.on("tooManyPlayers", () => {
      console.log("Cannot Join Game due to too many players");
    });

    this.state.socket.on("heartbeat", (playerName) => {
      console.log(playerName)
    })
  }

  componentWillMount() {
    this.checkHerokuPacks()
    this.interval = setInterval(() => this.state.socket.emit("heartbeat", ""),35000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  checkHerokuPacks = () => {
    console.log("CHECKING PACKS")
    fetch(this.props.url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
          return response.json();
      })
    .then(() => {
      this.setState({
        herokuGood: true,
      });
    })
    .catch(() => setTimeout(() => {
      console.log("World")
      this.checkHerokuPacks()
      console.log("Hello")
    }, 500))
  }

  getPacks = () => {
    let url = this.props.url + "getWordPacks";
    console.log(url)
    fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw Error(response.statusText);
          return response.json();
      })
    .then((data) => {
      console.log(data)
      this.setState({
        wordPacks: data.wordPacks,
        totalPacks: data.totalPacks,
      });
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  createBoard = (packType) => {
    let url = this.props.url + "createGameBoard/" + this.state.gameId + "/" + packType + "/";
    console.log("CREATING BOARD: ", url);
    fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
          return response.json();
      })
    .then(() => {
      let getUrl = this.props.url + "getGameBoard/" + this.state.gameId + "/";
      let context = {"url":getUrl,"packType":packType};
      this.state.socket.emit("getGameBoard", context);
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  getBoard = url => {
    // Call REST API to get number of likes
    console.log("URL FROM GetBoard: " + url);
    fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
          return response.json();
      })
    .then((data) => {
      console.log("DATA FROM GetBoard", data)
      this.setState({
        cards: data.cards,
        firstColor: data.firstColor,
        gameId: data.gameId
      })
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  deleteAllGames = () => {
    let url = this.props.url + "deleteAllGames/";
    fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
    .then((data) => {})
    .catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  // ------REGISTER USER------
  handleNameChange = event => {
    event.preventDefault();
    this.setState({playerName: event.target.value});
  }

  handleNameSubmit = event => {
    event.preventDefault();
    if(!this.state.playerRegistered) {
      this.setState({playerRegistered: true});
    }
  }

  // ----LOBBY SELECTION-------
  handleGameIdChange = event => {
    event.preventDefault();
    if(!isNaN(event.target.value) && event.target.value.length <= 5) {
      this.setState({gameIdInput: event.target.value});
    }
  }

  handleGameIdSubmit = event => {
    event.preventDefault();
    this.setState({gameId: event.target[0].value}, () => {
      let info = {
        "gameId": this.state.gameId,
        "name": this.state.playerName
      }
      this.state.socket.emit("gameIdRegistered", info);
    });
  }

  // ------PACK PANEL-------
  handlePackSelection = event => {
    event.preventDefault();
    let pack = event.target.className;
    this.createBoard(pack)
    // let url = this.props.url + "createGame/" + this.state.gameId + "/" + pack;
    // let context = {"url":url,"packType":pack};
    // this.state.socket.emit("createGameBoard", context);
  }

  previousPage = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  }

  nextPage = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  // ------ROLE PANEL-------
  handleRoleSelection = event => {
    event.preventDefault();
    let content = {
      "playerName": this.state.playerName,
      "role": event.target.className
    }
    this.state.socket.emit("registerPlayerRole", content)
  }

  // ---------GAME----------
  handleClueWordSubmit = event => {
    event.preventDefault();
    let clueWord = `${this.state.playerName}:_${this.state.clueWordValue}`
    this.state.socket.emit("clueWordSubmit", clueWord);
  }

  handleClueWordChange = event => {
    event.preventDefault();
    this.setState({clueWordValue:event.target.value})
  }

  handleCardClick = event => {
    event.preventDefault();
    this.state.socket.emit('cardClicked', event.target.id);
  }

  render () {
    return (
      <div style={styles.screen}>
        <div className="container">
          {!this.state.herokuGood
          ?
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>Loading CodeNames...</div>
          :
          (!this.state.playerRegistered)
          ?
          <RegisterUserPanel
            handleNameChange={this.handleNameChange}
            handleNameSubmit={this.handleNameSubmit}
            playerName={this.state.playerName}
          />
          :
          (this.state.gameId === "")
          ?
          <LobbySelection
            gameIdRandom={this.state.gameIdRandom}
            gameIdInput={this.state.gameIdInput}
            handleGameIdChange={this.handleGameIdChange}
            handleGameIdSubmit={this.handleGameIdSubmit}
          />
          :
          (this.state.lobbyNames.length < 4)
          ?
          <WaitingPanel
            playerName={this.state.playerName}
            lobbyNames={this.state.lobbyNames}
            message={
            `Waiting on ${4-this.state.lobbyNames.length} players to join...\n\nYour Game ID is: ${this.state.gameId}`
            }
          />
          :
          (this.state.isFirstPlayer && this.state.packType === '')
          ?
          <PackPanel 
            previousPage={this.previousPage}
            nextPage={this.nextPage}
            handlePackSelection={this.handlePackSelection}
            webPacksPerPage={this.props.webPacksPerPage}
            pageNumber={this.state.pageNumber}
            totalPacks={this.state.totalPacks}
            wordPacks={this.state.wordPacks}
          />
          :
          (this.state.packType === '')
          ?
          <WaitingPanel
            playerName={this.state.playerName}
            lobbyNames={this.state.lobbyNames}
            message="Waiting on pack selection"
          />
          :
          (this.state.rolesChosen.length < 4)
          ?
          <RolePanel 
            handleRoleSelection={this.handleRoleSelection}
            roles={this.state.rolesChosen}
          />      
          :
          <Game
            firstColor={this.state.firstColor}
            cards={this.state.cards}
            socket={this.state.socket}
            handleCardClick={this.handleCardClick}
            role={this.state.role}
            clueWordValue={this.state.clueWordValue}
            clueWords={this.state.clueWords}
            handleClueWordSubmit={this.handleClueWordSubmit}
            handleClueWordChange={this.handleClueWordChange}
          />
          }
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
  }
};


export default App;