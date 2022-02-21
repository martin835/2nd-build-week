import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <>
     {/*  <MyNavbar/> */}
      <Container>
        <h1>LINKED IN</h1>
        <Row>
          <Col xs={9}>
           {/*  <ProfileMainSection/> */}
          </Col>
          <Col xs={3}>
           {/*  <ProfileSideSection/> */}
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
