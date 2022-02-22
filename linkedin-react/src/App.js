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
import SearchCard from "./components/SearchCard";
import Search from "./components/Search";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      {/* <BrowserRouter>
        <MyNavbar query={query} setQuery={setQuery} />
        <Container>
          <Row>
            <Col xs={12} lg={9}>
              <Search query={query} />
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
      </BrowserRouter> */}
      <BrowserRouter>
        <MyNavbar query={query} setQuery={setQuery} />
        <Container>
          <Row>
            <Col xs={12} lg={9}>
              <Routes>
                <Route path="/search" element={<Search query={query} />} />
                <Route
                  path="/"
                  render={(props) => (
                    <div>
                      <ProfileMainHero />
                      <ProfileExperienceContainer />
                    </div>
                  )}
                />
                {/* <Route path="/" element={<ProfileMainHero />} />
                <Route path="/" element={<ProfileExperienceContainer />} /> */}
                {/* <Route path="/" element={<SidebarEdit />} /> */}
                {/* <Search query={query} />
                <ProfileMainHero /> */}
              </Routes>
            </Col>

            <Col className="d-none d-lg-block" lg={3}>
              {/* <Routes>
                <Route path="/" element={<SidebarEdit /> + <ProfileList />} />
              </Routes> */}
            </Col>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
