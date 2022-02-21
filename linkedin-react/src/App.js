import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import SidebarEdit from "./components/SidebarEdit";
import ProfileMainHero from "./components/ProfileMainHero";
import ProfileExperienceContainer from "./components/ProfileExperienceContainer";
import ProfileList from "./components/ProfileList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            <ProfileMainHero />
            <ProfileExperienceContainer />
          </Col>

          <Col className="d-none d-lg-block" lg={3}>
            <SidebarEdit />
            <ProfileList />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
