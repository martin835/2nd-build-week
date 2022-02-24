import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import SidebarEdit from "./components/SidebarEdit";
import ProfileMainHero from "./components/ProfileMainHero";
import ProfileExperienceContainer from "./components/ProfileExperienceContainer";
import ProfileList from "./components/ProfileList";
import Footer from "./components/Footer";
import Search from "./components/Search";
import StartPost from "./components/StartPost";
import MyAllPosts from "./components/MyAllPosts";
import PostContainer from "./components/PostContainer";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePostCard from "./components/ProfilePostCard";

function App() {
  const [query, setQuery] = useState("");
  const [myPosts, setMyPosts] = useState(false);
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPost = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGI2OWJlNDBiNTAwMTViNmM5MzUiLCJpYXQiOjE2NDU0MzE2NTcsImV4cCI6MTY0NjY0MTI1N30.sW4qGqsabPColujp6kpA3P6pfCQ-VN9D8e5WEW1RdTI",
        },
      });
      if (response.ok) {
        let data = await response.json();
        //console.log(data);
        setPosts(data.reverse());
        setIsLoading(false);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchPost(), []);

  return (
    <BrowserRouter>
      <MyNavbar query={query} setQuery={setQuery} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <Col xs={12} lg={3} className="px-1">
                  <ProfilePostCard myPosts={myPosts} setMyPosts={setMyPosts} />
                </Col>
                <Col xs={12} lg={6} className="px-1">
                  <StartPost
                    posts={posts}
                    setPosts={setPosts}
                    fetchPost={fetchPost}
                  />
                  {myPosts ? (
                    <MyAllPosts />
                  ) : isLoading ? (
                    <div className=" w-100 d-flex justify-content-center align-items-center mt-2">
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    <PostContainer
                      className="mt-1"
                      posts={posts}
                      setPosts={setPosts}
                      fetchPost={fetchPost}
                    />
                  )}
                </Col>
                <Col xs={12} lg={3} className="px-1">
                  <ProfileList />
                </Col>
              </Row>
            }
          />
          <Route
            path="/search"
            element={
              <Row>
                <Col xs={12} lg={9} className="px-1">
                  <Search searchedQuery={query} setQuery={setQuery} />
                </Col>
                <Col xs={12} lg={3} className="px-1">
                  <ProfileList />
                </Col>
              </Row>
            }
          />

          <Route
            path="/me"
            element={
              <Row>
                <Col xs={12} lg={9} className="px-1">
                  <ProfileMainHero />
                  <ProfileExperienceContainer />
                </Col>
                <Col xs={12} lg={3} className="px-1">
                  <SidebarEdit />
                  <ProfileList />
                </Col>
              </Row>
            }
          />
          <Route
            path="/:userId"
            element={
              <Row>
                <Col xs={12} lg={9} className="px-1">
                  <ProfileMainHero />
                  <ProfileExperienceContainer />
                </Col>
                <Col xs={12} lg={3} className="px-1">
                  <ProfileList />
                  {/* <SidebarEdit /> */}
                </Col>
              </Row>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
