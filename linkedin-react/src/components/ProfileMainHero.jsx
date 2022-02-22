import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function ProfileMainHero() {
  const [info, setInfo] = useState({});
  const [user, setUser] = useState("");

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

  return (
    <>
      <div className="martin-profile-main-br bg-white mt-3">
        <div
          className="martin-profile-hero-main-container"
          style={{
            backgroundImage: "url(" + require("../assets/hero-pic.jpeg") + ")",
          }}
        >
          <img src={info.image} />
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
          </Col>

          <Col xs={5}>
            <div className="mt-3">
              <img
                className="martin-profile-hero-thumbnail-image mr-2"
                src={require("../assets/placeholder.jpeg")}
              />
              <span>
                <strong>Employment at Random Company</strong>
              </span>
            </div>
            <div className="mt-3">
              <img
                className="martin-profile-hero-thumbnail-image mr-2"
                src={require("../assets/strive-logo.jpeg")}
              />
              <span>
                <strong>Strive School</strong>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProfileMainHero;
