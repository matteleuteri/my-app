// import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
      
      <div class="container">
        <div class="row">
          <div class="col">
            1 of 2
          </div>
          <div class="col">
            2 of 2g
          </div>
        </div>
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col">
            2 of 3
          </div>
          <div class="col">
            3 of 3
          </div>
        </div>
      </div>

      <header className="App-header">
        <button type="button" id="button">Matt's Button</button>
      </header>
    </div>
  );
}

export default App;
