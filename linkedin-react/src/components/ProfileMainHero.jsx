import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <>
      <div
        className="martin-profile-hero-main-container"
        style={{
          backgroundImage: "url(" + require("../assets/hero-pic.jpeg") + ")",
        }}
      >
        <img src={require("../assets/avatar-profile-hero.webp")} />
      </div>
      <Row className="mt-5">
        <Col xs={7}>
          <h2>Martin Konecny</h2>
          <p>
            I am passionate about creating web applications with great user
            experience.
          </p>
          <p>Slovakia | Contact info</p>
          <p>500+ connections</p>
          <div className="profile-hero-btns">
            <Button variant="primary">Open to</Button>
            <Button variant="outline-primary">Add profile section</Button>
            <Button variant="outline-secondary">More</Button>
          </div>
        </Col>

        <Col xs={5}>
          <div className="mt-3">
            <img className="martin-profile-hero-thumbnail-image mr-2" src={require("../assets/placeholder.jpeg")} />
            <span><strong>Employment at Random Company</strong></span>
          </div>
          <div className="mt-3">
            <img className="martin-profile-hero-thumbnail-image mr-2" src={require("../assets/strive-logo.jpeg")} />
            <span><strong>Strive School</strong></span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
