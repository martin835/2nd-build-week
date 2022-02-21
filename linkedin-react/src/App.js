
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileList from "./components/ProfileList";



import MyNavbar from "./components/MyNavbar";
import SidebarEdit from "./components/SidebarEdit";
import ProfileMainHero from './components/ProfileMainHero'




function App() {
  return (
    <>

      

      <Container>
    <MyNavbar />
        <Row>

          <Col xs={9}> <ProfileMainHero/></Col>
          <Col xs={3}>
            <SidebarEdit />
            <ProfileList />
            </Col>

          
         
        </Row>
      </Container>
    </>
  );
}

export default App;
