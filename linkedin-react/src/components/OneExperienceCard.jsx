import { Container, Row, Col } from "react-bootstrap";

function OneExperienceCard() {
  return (
    <Row className="">
      <Col xs={1}>
        <div>
          <img
            className="martin-profile-experience-thumbnail-image mr-2"
            src={require("../assets/strive-logo.jpeg")}
          />
        </div>
      </Col>
      <Col xs={11}>
        <h5>Full Stack Developer in making</h5>
      </Col>
    </Row>
  );
}

export default OneExperienceCard;
