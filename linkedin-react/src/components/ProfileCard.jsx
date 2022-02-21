import { Row, Col, Button } from "react-bootstrap";

const ProfileCard = () => {
  return (
    <Row>
      <Col xs={3}>
        <img
          className="Gbemi-image1"
          src={require("../assets/user.png")}
          alt="profile pics"
        />
      </Col>
      <Col xs={9}>
        <h6 className="mb-0 Gbemi-h6">Martina Jenny </h6>
        <p className="mb-1 Gbemi-profile-card-description">lorem ipsum 50 </p>
        <Button className="Gbemi-button1" variant="outline-secondary">
          Connect
        </Button>
      </Col>
    </Row>
  );
};

export default ProfileCard;
