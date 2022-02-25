import { Row, Col } from "react-bootstrap";

function OneExperienceCard(props) {
  return (
    <>
      <Row className="mb-3">
        <Col xs={2} mx-2>
          <div>
            <img
              className="martin-profile-experience-thumbnail-image mr-0"
              src={
                props.image
                  ? props.image
                  : require("../assets/placeholder.jpeg")
              }
              alt=""
            />
          </div>
        </Col>
        <Col xs={10} className="px-0">
          <Row>
            <Col xs={10} className="px-0">
              <h5 className="mb-0">{props.role}</h5>
              <div>{props.company}</div>
              <div className="text-secondary">
                {props.startDate} - {props.endDate ? props.endDate : "now"} 6
                months
              </div>
              <div className="text-secondary">{props.area}</div>
            </Col>
            <Col xs={2}>
              {props.editMode && (
                <div
                  className="martin-profile-icon-large mr-4"
                  onClick={() => props.editJob(props.id)}
                >
                  <i className="bi bi-pencil"></i>
                </div>
              )}
            </Col>
          </Row>
          <p className="mt-2 px-0">{props.description}</p>
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default OneExperienceCard;
