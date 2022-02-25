import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

import { useParams } from "react-router-dom";

function ProfileMainHero() {
  const params = useParams();

  const [info, setInfo] = useState({});
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputFile = useRef(null);

  useEffect(() => {
    loadInfo();
  }, [params]);

  const loadInfo = async () => {
    let user = params.userId ? params.userId : "me";

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

  const uploadProfilePicture = async (e) => {
    e.preventDefault();
    const inpFile = document.getElementById("formUploadProfilePic");
    const formData = new FormData();
    formData.append("profile", inpFile.files[0]);
    console.log(inpFile.files[0]);

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/62134b69be40b50015b6c935/picture",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGI2OWJlNDBiNTAwMTViNmM5MzUiLCJpYXQiOjE2NDU0MzE2NTcsImV4cCI6MTY0NjY0MTI1N30.sW4qGqsabPColujp6kpA3P6pfCQ-VN9D8e5WEW1RdTI",
          },
          body: formData,
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        loadInfo();
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="martin-profile-main-br bg-white mt-3">
        <div
          className="martin-profile-hero-main-container"
          style={{
            backgroundImage: "url(" + require("../assets/hero-pic.jpeg") + ")",
          }}
        >
          <img
            src={info.image}
            alt=""
            onClick={handleShow}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Row className="mt-5 p-3">
          <Col xs={7}>
            <h2>
              {info.name} {info.surname}
            </h2>
            <p className="martin-profile-hero-desc">{info.bio}</p>
            <p>
              <span className="text-secondary">
                {info.area} <i className="bi bi-dot"></i>{" "}
              </span>
              <strong className="martin-color-link-profile">
                Contact info
              </strong>
            </p>
            <p className="martin-color-link-profile">
              <strong>500+ connections</strong>
            </p>
            {!params.userId && (
              <div className="profile-hero-btns">
                <Button
                  variant="primary"
                  className="martin-profile-main-btn mb-2 mb-lg-0"
                >
                  Open to
                </Button>
                <Button
                  variant="outline-primary"
                  className="martin-profile-outline-btn mb-2 mb-lg-0"
                >
                  Add profile section
                </Button>
                <Button variant="outline-secondary">More...</Button>
              </div>
            )}
          </Col>

          <Col xs={5}>
            <div className="mt-3">
              <img
                className="martin-profile-hero-thumbnail-image mr-2"
                src={require("../assets/placeholder.jpeg")}
                alt=""
              />
              <span>
                <strong>Employment at Random Company</strong>
              </span>
            </div>
            <div className="mt-3">
              <img
                className="martin-profile-hero-thumbnail-image mr-2"
                src={require("../assets/strive-logo.jpeg")}
                alt=""
              />
              <span>
                <strong>Strive School</strong>
              </span>
            </div>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload a profile picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formUploadProfilePic">
                <Form.Label>Select a picture</Form.Label>
                <Form.Control type="file" ref={inputFile} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                handleClose();
                uploadProfilePicture(e);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ProfileMainHero;
