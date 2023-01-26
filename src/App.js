import { Container, Button, Grid } from 'semantic-ui-react';
import heater1 from './assets/Heater-1.mp3';
import heater2 from './assets/Heater-2.mp3';
import heater3 from './assets/Heater-3.mp3';
import heater4 from './assets/Heater-4.mp3';
import clap from './assets/Heater-6.mp3';
import openHH from './assets/Dsc_Oh.mp3';
import kicknhat from './assets/Kick_n_Hat.mp3';
import kick from './assets/RP4_KICK_1.mp3';
import closeHH from './assets/Cev_H2.mp3';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      display: event.target.id
    });
  }

  render() {
    function playAudio(str) {
      let audio = document.getElementById(str); 
      audio.play();
    }
    window.document.addEventListener('keydown', (event) => {
      playAudio(event.key.toUpperCase());
    }); 

    return (
      <div className="App">
        <Container id="drum-machine">
          <Grid>
            <Grid.Row centered>
              <Grid.Column>
                <Button size='massive' inverted color='red' id="Heater 1" onClick={ (event) => {playAudio("Q"); this.handleClick(event);}} className="drum-pad"> 
                  <audio id="Q" src={heater1} className="clip"></audio>
                  Q
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button size='massive' inverted color='red' id="Heater 2" onClick={ (event) => {playAudio("W"); this.handleClick(event);}} className="drum-pad">
                  <audio id="W" src={heater2} className="clip"></audio>
                  W
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button size='massive' inverted color='red' id="Heater 3" onClick={ (event) => {playAudio("E"); this.handleClick(event);}} className="drum-pad">
                  <audio id="E" src={heater3} className="clip"></audio>
                  E
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button size='massive' inverted color='red' id="Heater 4" onClick={ (event) => {playAudio("A"); this.handleClick(event);}} className="drum-pad">
                  <audio id="A" src={heater4} className="clip"></audio>
                  A
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button size='massive' inverted color='red' id="Clap" onClick={ (event) => {playAudio("S"); this.handleClick(event);}} className="drum-pad">
                  <audio id="S" src={clap} className="clip"></audio>
                  S
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column>
                <Button size='massive' inverted color='orange' id="Open HH" onClick={ (event) => {playAudio("D"); this.handleClick(event);}} className="drum-pad">
                  <audio id="D" src={openHH} className="clip"></audio>
                  D
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button size='massive' inverted color='orange' id="Kick n' Hat" onClick={ (event) => {playAudio("Z"); this.handleClick(event);}} className="drum-pad">
                  <audio id="Z" src={kicknhat} className="clip"></audio>
                  Z
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button size='massive' inverted color='orange' id="Kick" onClick={ (event) => {playAudio("X"); this.handleClick(event);}} className="drum-pad">
                  <audio id="X" src={kick} className="clip"></audio>
                  X
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button size='massive' inverted color='orange' id="Closed HH" onClick={ (event) => {playAudio("C"); this.handleClick(event);}} className="drum-pad">
                  <audio id="C" src={closeHH} className="clip"></audio>
                  C
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column id="display">
                <p>{this.state.display}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
