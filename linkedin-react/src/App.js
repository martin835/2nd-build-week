import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import SidebarEdit from "./components/SidebarEdit";
import ProfileMainHero from './components/ProfileMainHero'
import ProfileExperienceContainer from "./components/ProfileExperienceContainer";



function App() {
  return (
    <>
      <MyNavbar />
      <Container>
     
        <Row>

          <Col xs={9}>
           <ProfileMainHero/>
           <ProfileExperienceContainer/>
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
