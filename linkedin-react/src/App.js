import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileList from "./components/ProfileList";

function App() {
  return (
    <>
      {/*  <MyNavbar/> */}
      <Container>
        <Row>
          <Col xs={9}>{/*  <ProfileMainSection/> */}</Col>
          <Col xs={3}>
            <ProfileList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
