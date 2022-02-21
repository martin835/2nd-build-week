import { Container, Row, Col } from "react-bootstrap";

function OneExperienceCard() {
  return (
    <Row className="mb-3">
      <Col xs={1}>
        <div>
          <img
            className="martin-profile-experience-thumbnail-image mr-2"
            src={require("../assets/strive-logo.jpeg")}
          />
        </div>
      </Col>
      <Col xs={11}>
        <h5 className="mb-0">Full Stack Developer in making</h5>
        <div>Strive School</div>
        <div className="text-secondary">Nov 2021- May 2022 6 months</div>
        <div className="text-secondary">Bratislava/Berlin</div>
        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex nihil dolorum soluta vero odio, voluptas neque omnis quas tenetur quae voluptatibus ullam est id ipsum alias. Vel, laudantium earum.</p>
      </Col>
    </Row>
  );
}

export default OneExperienceCard;
