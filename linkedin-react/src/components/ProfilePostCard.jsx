import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProfilePostCard = ({ myPosts, setMyPosts }) => {
  const [myData, setMyData] = useState({});

  const params = useParams;

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    let user = params.userId ? params.userId : "me";

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
        console.log("Profile", data);
        setMyData(data);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="Gbemi-container mt-4 py-0">
      <Row>
        <Col>
          <center className="Gbemi-division d mt-2">
            <img
              className="Gbemi-image2"
              src={
                myData.image
                  ? myData.image
                  : require("../assets/placeholder.jpeg")
              }
              alt="profile pics"
            />
          </center>

          <Link to={"/me"}>
            <center className="text-dark Gbemi-h6">
              {myData.name} {""} {myData.surname}
            </center>
          </Link>
          <center className="text-muted mb-3 Gbemi-font">{myData.title}</center>
          <hr />
          <p className="d-flex mb-0">
            <span className="d-inline-block gbemi-span">Connection</span>
            <span className="d-inline-block gbemi-span ml-auto">1</span>
          </p>
          <h6 className="Gbemi-h6-2">Grow your network</h6>
          <hr />
          <p className="text-muted mb-0 Gbemi-font">
            Access exclusive tools & insights
          </p>
          <p className="Gbemi-h6-2 my-0 mb-2 ">Try Premium for free</p>

          <div
            className="text-dark border-top py-2"
            onClick={() => setMyPosts(!myPosts)}
            style={{ cursor: "pointer", fontSize: "0.9rem", fontWeight: "600" }}
          >
            <i class="bi bi-bookmark-fill"></i> Manage posts
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePostCard;
