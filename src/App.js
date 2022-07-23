// import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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

      {/* test */}
      
      <Container>
        <Row>
          <Col>
            1 of 2
          </Col>
          <Col>
            2 of 2g
          </Col>
        </Row>
        <Row>
          <Col>
            1 of 3
          </Col>
          <Col>
            2 of 3
          </Col>
          <Col>
            3 of 3
          </Col>
        </Row>
      </Container>

      <header className="App-header">
        <button type="button" id="button">Matt's Button</button>
      </header>
    </div>
  );
}

export default App;
