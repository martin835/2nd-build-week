import { Row, Col, Spinner } from "react-bootstrap";
import MyOnePost from "./MyOnePost";
import { useState, useEffect } from "react";

function MyAllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadMyPosts();
  }, []);

  const loadMyPosts = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
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

        setAllPosts(data.reverse());
        setLoading(false);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 bg-white mt-3 mb-5 martin-profile-experience-container">
      {loading ? (
        <div className=" w-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        allPosts
          .filter((post) => post.username === "Martin1234")
          .map((post) => (
            <MyOnePost
              post={post}
              loadMyPosts={loadMyPosts}
              text={post.text}
              postId={post._id}
              key={post._id}
            />
          ))
      )}
    </div>
  );
}

export default MyAllPosts;
