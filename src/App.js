import { Segment, Button} from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Segment size='massive'>
        <Button size='massive' inverted color='red'>Q</Button>
        <Button size='massive' inverted color='red'>W</Button>
      </Segment>
    </div>
  );
}

export default App;
