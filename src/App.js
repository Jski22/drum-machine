import { Container, Button, Grid } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column>
              <Button size='massive' inverted color='red'>Q</Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red'>W</Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red'>E</Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red'>A</Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red'>S</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Button size='massive' inverted color='red'>D</Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red'>Z</Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red'>X</Button>
            </Grid.Column>
            <Grid.Column>
              <Button size='massive' inverted color='red'>C</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
