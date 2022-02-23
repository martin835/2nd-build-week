import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import SidebarEdit from "./components/SidebarEdit";
import ProfileMainHero from "./components/ProfileMainHero";
import ProfileExperienceContainer from "./components/ProfileExperienceContainer";
import ProfileList from "./components/ProfileList";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  return (
    <BrowserRouter>
      <MyNavbar query={query} setQuery={setQuery} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <Col xs={12} lg={2}>
                  {/* <<< Profile card >>>> */}
                </Col>
                <Col xs={12} lg={7}>
                  {/* <<< POST SOMETHING >>>> */}
                  {/* <<< POST CONTAINER >>>> */}
                </Col>
                <Col xs={12} lg={3}>
                  <ProfileList />
                </Col>
              </Row>
            }
          />
          <Route
            path="/search"
            element={
              <Row>
                <Col xs={12} lg={9}>
                  <Search searchedQuery={query} />
                </Col>
                <Col xs={12} lg={3}>
                  <Search searchedQuery={query} />
                </Col>
              </Row>
            }
          />

          <Route
            path="/me"
            element={
              <Row>
                <Col xs={12} lg={9}>
                  <ProfileMainHero />
                  <ProfileExperienceContainer />
                </Col>
                <Col xs={12} lg={3}>
                  <SidebarEdit />
                  <ProfileList />
                </Col>
              </Row>
            }
          />
          <Route
            path="/:userId"
            element={
              <Row>
                <Col xs={12} lg={9}>
                  <ProfileMainHero />
                  <ProfileExperienceContainer />
                </Col>
                <Col xs={12} lg={3}>
                  <ProfileList />
                  {/* <SidebarEdit /> */}
                </Col>
              </Row>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
