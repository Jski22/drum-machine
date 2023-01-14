import { Container, Button, Grid } from 'semantic-ui-react';
import heater1 from './assets/Heater-1.mp3';
import heater2 from './assets/Heater-2.mp3';
import './App.css';
import React from 'react';

function App() {

  function playAudio() {
    new Audio(heater1).play();
  }

  function playAudio1() {
    new Audio(heater2).play();
  }

  return (
    <div className="App">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={playAudio}> 
                Q
              </Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red' onClick={playAudio1}>W</Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red'>E</Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red'>A</Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red'>S</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='3'>
              <Button size='massive' inverted color='red'>D</Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red'>Z</Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red'>X</Button>
            </Grid.Column>
            <Grid.Column width='2'>
              <Button size='massive' inverted color='red'>C</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
