import {
  Row,
  Col,
  ListGroup,
  Button,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function MyOnePost(props) {

const [editMode, setEditMode] = useState(false)
const [post, setPost] = useState({ text: "" });
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [loading, setLoading] = useState(false);


const loadPostText = async () => {
    try {
    setLoading(true);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + props.postId,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGI2OWJlNDBiNTAwMTViNmM5MzUiLCJpYXQiOjE2NDU0MzE2NTcsImV4cCI6MTY0NjY0MTI1N30.sW4qGqsabPColujp6kpA3P6pfCQ-VN9D8e5WEW1RdTI",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setLoading(false);
        setPost({ text: data.text });
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
}

const handleEdit = async () => {
    try {
    setLoading(true);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + props.postId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGI2OWJlNDBiNTAwMTViNmM5MzUiLCJpYXQiOjE2NDU0MzE2NTcsImV4cCI6MTY0NjY0MTI1N30.sW4qGqsabPColujp6kpA3P6pfCQ-VN9D8e5WEW1RdTI",
          },
          body: JSON.stringify(post),
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        handleClose();
        setEditMode(false);
        setLoading(false);
        props.loadMyPosts();
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
}
const handleDelete = async () => {}

  return (
    <>
      <Row>
        <Col>
          <div className="martin-post-container">
            {loading ? (<Spinner animation="border" variant="primary" />) : props.text}
            <span
              className="float-right martin-profile-icon-large"
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              <i class="bi bi-three-dots"></i>
            </span>
          </div>
          {editMode && (
            <div className="martin-post-edit-buttons-container">
              <ListGroup>
                <ListGroup.Item>
                  <Button variant="link" onClick={() => {loadPostText();handleShow()}}>
                    <i className="bi bi-pencil"></i> Edit Post
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="link" onClick={() => handleDelete()}>
                    <i className="bi bi-trash3"></i> Delete Post
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </div>
          )}
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Edit your post here</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={3}
              value={post.text}
              onChange={(e) => setPost({ text: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleEdit();
            }}
            className="martin-profile-main-btn"
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyOnePost;
