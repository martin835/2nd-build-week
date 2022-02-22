import { Container, Row, Col } from "react-bootstrap";

function OneExperienceCard(props) {
  return (
    <>
      <Row className="mb-3">
        <Col xs={1}>
          <div>
            <img
              className="martin-profile-experience-thumbnail-image mr-2"
              src={props.image ? props.image : require("../assets/placeholder.jpeg")}
            />
          </div>
        </Col>
        <Col xs={11}>
          <h5 className="mb-0">{props.role}</h5>
          <div>{props.company}</div>
          <div className="text-secondary">{props.startDate} - {props.endDate ? props.endDate : "now" } 6 months</div>
          <div className="text-secondary">{props.area}</div>
          <p className="mt-2">
            {props.description}
          </p>
        </Col>
      </Row>
      <hr/>
    </>
  );
}

export default OneExperienceCard;
