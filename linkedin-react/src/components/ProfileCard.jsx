import { Row, Col, Button } from "react-bootstrap";

const ProfileCard = ({ profiles }) => {
  return (
    <Row key={profiles._id}>
      <Col xs={3}>
        <img
          className="Gbemi-image1"
          src={
            profiles.image
              ? profiles.image
              : require("../assets/placeholder.jpeg")
          }
          alt="profile pics"
        />
      </Col>
      <Col xs={9}>
        <h6 className="mb-0" style={{ fontSize: "0.9rem", fontWeight: "600" }}>
          {profiles.name} {profiles.surname}{" "}
        </h6>
        <p className="mb-1 Gbemi-profile-card-description">{profiles.title} </p>
        <Button className="Gbemi-button1 py-1" variant="outline-secondary">
          Connect
        </Button>
      </Col>
    </Row>
  );
};

export default ProfileCard;
