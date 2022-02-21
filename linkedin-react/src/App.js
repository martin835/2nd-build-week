import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import SidebarEdit from "./components/SidebarEdit";
import ProfileMainHero from "./components/ProfileMainHero";

function App() {
  return (
    <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col xs={9}>
            <ProfileMainHero />
          </Col>

          <Col xs={3}>
            <SidebarEdit />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
