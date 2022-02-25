
import { Row, Col } from "react-bootstrap";
import moment from "moment";


function OneExperienceCard(props) {
  return (
    <>
      <Container className="mb-3">
        <Row>
          <Col xs={2}>
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
            <Col xs={10}>
              <h5 className="mb-0">{props.role}</h5>
              <div>{props.company}</div>
              <div className="text-secondary">
                {moment(props.startDate).utc().format("YYYY-MM-DD")} -{" "}
                {moment(props.endDate).utc().format("YYYY-MM-DD") ||
                props.endDate === null
                  ? moment(props.endDate).utc().format("YYYY-MM-DD")
                  : "present"}
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
              <p className="mt-2 px-0">{props.description}</p>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
}

export default OneExperienceCard;
