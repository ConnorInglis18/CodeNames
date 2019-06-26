import React, { Component } from 'react';
import './../Static/css/App.css';
import Game from './Game.js';
import PropTypes from 'prop-types';
import openSocket from 'socket.io-client';
import RegisterUserPanel from './RegisterUserPanel.js';
import WaitingPanel from './WaitingPanel.js';
import RolePanel from './RolePanel.js';
import PackPanel from './PackPanel.js';

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
      isFirstPlayer: false,
      lobbyNames: [],
      numRegisteredPlayers: 0,
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

    this.state.socket.on('gameId', gameID => {
      this.setState({ gameId: gameID }, () => {
        console.log("GameID: " + this.state.gameId);
      });
    });

    this.state.socket.on("firstPlayer", _isFirstPlayer => {
      this.setState({isFirstPlayer: _isFirstPlayer});
      this.getPacks();
    });

    this.state.socket.on("message", message => {
      console.log("MESSAGE: " + message);
    });

    this.state.socket.on("playerCount", info => {
      this.setState({
        numRegisteredPlayers: info["numPlayers"],
        lobbyNames: info["lobbyList"]
      });
    });

    this.state.socket.on("registerPlayer", name => {
      this.setState({
        playerName: name,
        playerRegistered: true
      });
    });

    this.state.socket.on("registerUserRole", playerRole => {
      this.setState({role:playerRole}, () => {console.log("PLAYER ROLE: " + this.state.role);});
    });

    this.state.socket.on("registerNewRoll", roles => {
      this.setState({rolesChosen: roles}, () => {
        console.log("ROLES CHOSEN: " + this.state.rolesChosen);
      })
    })

    this.state.socket.on("createGameBoard", content => {
      this.setState({packType: content["pack"]});
      this.getBoard(content["url"]);
    })

    this.state.socket.on("removePlayer", numPlayers => {
      this.setState({numRegisteredPlayers: numPlayers});
    });

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

    this.state.socket.on("tooManyPlayers", () => {
      console.log("Cannot Join Game due to too many players");
    });
  }

  componentWillUnmount() {
    this.deleteAllGames();
  }

  getPacks = () => {
    let url = this.props.url + "wordPacks";
    console.log(url)
    fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw Error(response.statusText);
          return response.json();
      })
    .then((data) => {
      this.setState({
        wordPacks: data.wordPacks,
        totalPacks: data.totalPacks,
      });
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

  toggleView = event => {
    event.preventDefault();
    this.setState({
      toggleColors: !this.state.toggleColors
    });
  }

  handlePackSelection = event => {
    event.preventDefault();
    let pack = event.target.className;
    let url = this.props.url + "createGame/" + this.state.gameId + "/" + pack;
    let context = {"url":url,"packType":pack};
    this.state.socket.emit("createGameBoard", context);
  }

  handleRoleSelection = event => {
    event.preventDefault();
    let content = {
      "playerName": this.state.playerName,
      "role": event.target.className
    }
    this.state.socket.emit("registerPlayerRole", content)
  }

  handleClueWordSubmit = event => {
    event.preventDefault();
    this.state.socket.emit("clueWordSubmit", this.state.clueWordValue);
  }

  handleClueWordChange = event => {
    event.preventDefault();
    this.setState({clueWordValue:event.target.value})
  }


  previousPage = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  }

  nextPage = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  handleCardClick = event => {
    event.preventDefault();
    this.state.socket.emit('cardClicked', event.target.id);
  }

  handleNameChange = event => {
    event.preventDefault();
    this.setState({ playerName: event.target.value});
  }

  registerPlayer = event => {
    event.preventDefault();
    if(!this.state.playerRegistered) {
      this.state.socket.emit('submitRegisterPlayer', this.state.playerName);
    }
  }

  render () {
    return (
      <div style={styles.screen}>
        <div className="container">
          {!this.state.playerRegistered
          ?
          <RegisterUserPanel
            handleNameChange={this.handleNameChange}
            registerPlayer={this.registerPlayer}
            playerName={this.state.playerName}
          />
          :
          (this.state.numRegisteredPlayers < 4)
          ?
          <WaitingPanel
            playerName={this.state.playerName}
            lobbyNames={this.state.lobbyNames}
            message="Waiting on 4 players to join..."
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
            playerName={this.state.playerName}
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