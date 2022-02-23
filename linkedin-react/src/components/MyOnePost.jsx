import { Row, Col } from "react-bootstrap";

function MyOnePost(props) {
  return (
    <Row>
      <Col>
        {props.text}{" "}
        <span className="float-right martin-profile-icon-large">
          <i class="bi bi-three-dots"></i>
        </span>
      </Col>
    </Row>
  );
}

export default MyOnePost;
