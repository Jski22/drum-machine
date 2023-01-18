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

function App() {

  function playAudio(str) {
    var audio = document.getElementById(str); 
    audio.play();
  }

  return (
    <div className="App">
      <Container id="drum-machine">
        <Grid>
          <Grid.Row centered>
            <Grid.Column>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("Q")} className="drum-pad"> 
                <audio id="Q" src={heater1} className="clip"></audio>
                Q
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("W")} className="drum-pad">
                <audio id="W" src={heater2} className="clip"></audio>
                W
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("E")} className="drum-pad">
                <audio id="E" src={heater3} className="clip"></audio>
                E
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("A")} className="drum-pad">
                <audio id="A" src={heater4} className="clip"></audio>
                A
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("S")} className="drum-pad">
                <audio id="S" src={clap} className="clip"></audio>
                S
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Button size='massive' inverted color='orange' onClick={ () => playAudio("D")} className="drum-pad">
                <audio id="D" src={openHH} className="clip"></audio>
                D
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='orange' onClick={ () => playAudio("Z")} className="drum-pad">
                <audio id="Z" src={kicknhat} className="clip"></audio>
                Z
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='orange' onClick={ () => playAudio("X")} className="drum-pad">
                <audio id="X" src={kick} className="clip"></audio>
                X
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='orange' onClick={ () => playAudio("C")} className="drum-pad">
                <audio id="C" src={closeHH} className="clip"></audio>
                C
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>Display description here</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
