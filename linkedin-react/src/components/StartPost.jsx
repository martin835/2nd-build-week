import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const StartPost = (props) => {
  const [newPost, setNewPost] = useState({ text: "" });
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   useEffect(() => {
     loadInfo();
   }, []);

   const loadInfo = async () => {
     let user = "me";

     //5fc4af46b708c200175de88f
     try {
       let response = await fetch(
         "https://striveschool-api.herokuapp.com/api/profile/" + user,
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
         setInfo(data);
       } else {
         alert("something went wrong :(");
       }
     } catch (error) {
       console.log(error);
     }
   };
  const handlePost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGI2OWJlNDBiNTAwMTViNmM5MzUiLCJpYXQiOjE2NDU0MzE2NTcsImV4cCI6MTY0NjY0MTI1N30.sW4qGqsabPColujp6kpA3P6pfCQ-VN9D8e5WEW1RdTI",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        props.fetchPost();
        setShow(false);
        setNewPost({
          text: "",
        });
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white martin-profile-experience-container mt-4">
      <Row className=" p-3">
        <Col xs={2}>
          <div className="martin-start-post-pic">
            <img
              src={info.image}
              alt="profile pic"
            />
          </div>
        </Col>
        <Col xs={10}>
          <Button
            className="w-100 h-100 text-left martin-border-radius-45 martin-profile-icon-large"
            variant="outline-secondary"
            onClick={handleShow}
          >
            Start Post
          </Button>
        </Col>
      </Row>
      <Row className="px-3 pb-3 martin-profile-icon-large  ">
        <Col
          xs={3}
          className=" d-flex justify-content-center align-items-center "
        >
          <Button className="martin-profile-post-button px-0">
            <i className="bi bi-image"></i>
            <span className="ml-1" style={{ fontSize: "1rem" }}>
              Photo
            </span>
          </Button>
        </Col>
        <Col
          xs={3}
          className=" d-flex justify-content-center align-items-center "
        >
          <Button className="martin-profile-post-button px-0">
            <i className="bi bi-camera-video"></i>
            <span className="ml-1" style={{ fontSize: "1rem" }}>
              Video
            </span>
          </Button>
        </Col>
        <Col
          xs={3}
          className=" d-flex justify-content-center align-items-center "
        >
          <Button className="martin-profile-post-button px-0">
            <i className="bi bi-calendar-date"></i>
            <span
              className="ml-1"
              style={{ fontSize: "1rem", fontWeight: "400" }}
            >
              Event
            </span>
          </Button>
        </Col>
        <Col
          xs={3}
          className=" d-flex justify-content-center align-items-center "
        >
          <Button className="martin-profile-post-button px-0">
            <i className="bi bi-text-paragraph"></i>
            <span className="ml-1" style={{ fontSize: "1rem" }}>
              Article
            </span>
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write your post here</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newPost.text}
              onChange={(e) => setNewPost({ text: e.target.value })}
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
              handlePost();
            }}
            className="martin-profile-main-btn"
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StartPost;
