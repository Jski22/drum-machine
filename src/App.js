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
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' value="PLAY" onClick={ () => playAudio("clip")}> 
                <audio id="clip" src={heater1}></audio>
                Q
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip1")}>
                <audio id="clip1" src={heater2}></audio>
                W
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip2")}>
                <audio id="clip2" src={heater3}></audio>
                E
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip3")}>
                <audio id="clip3" src={heater4}></audio>
                A
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip4")}>
                <audio id="clip4" src={clap}></audio>
                S
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='3'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip5")}>
                <audio id="clip5" src={openHH}></audio>
                D
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip6")}>
                <audio id="clip6" src={kicknhat}></audio>
                Z
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip7")}>
                <audio id="clip7" src={kick}></audio>
                X
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={ () => playAudio("clip8")}>
                <audio id="clip8" src={closeHH}></audio>
                C
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
