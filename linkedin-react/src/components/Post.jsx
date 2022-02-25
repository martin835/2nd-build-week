import { Container, Row, Col, Button } from "react-bootstrap";
import { BsDot, BsHandThumbsUp } from "react-icons/bs";
import { BiWorld, BiMessageRoundedDetail } from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const Post = ({ data, ThreeDot, editable }) => {
  console.log(data);

  const followers = Math.floor(Math.random() * 10000);
  // const days = Math.floor(Math.random() * 15);

  return (
    <Container className={"mirko-posts-container my-2  px-3"}>
      <Row>
        <Col className={"mirko-post mt-3 border-bottom"}>
          <div className={"mirko-post-header"}>
            <div className={"d-flex justify-content-between"}>
              <div className={"d-flex flex-row mb-2"}>
                <img
                  src={data.user?.image}
                  alt="user profile"
                  width="50"
                  height="50"
                  style={{ borderRadius: "30px" }}
                ></img>
                <Col className={"d-flex flex-column"}>
                  <h6 className={"mirko-post-text fw-bold my-0"}>
                    {data.user?.name} {data.user?.surname}
                  </h6>
                  <h6 className={"mirko-post-text2 my-0"}>
                    {`${followers} followers`}
                    <BsDot />
                    <BiWorld />
                  </h6>
                  {/* <h6 className={"mirko-post-text2 my-0"}>
                    {`${days} followers`}
                    <BsDot />
                    <BiWorld />
                  </h6> */}
                </Col>
              </div>
              {/* <BsThreeDots className={"three-dots"} /> */}
              {editable && <ThreeDot />}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="d-flex justify-content-start align-items-center  ">
            {data.image ? (
              <>
                <Col xs={12} md={3} className="justify-content-center">
                  <img
                    className="w-100 h-100 my-3 single-post-img-inner"
                    src={data.image}
                    alt=""
                  />
                </Col>

                <Col xs={12} md={9} className="px-3">
                  <h6
                    className="w-100 h-100 my-3"
                    style={{ wordWrap: "break-word" }}
                  >
                    {data.text}
                  </h6>
                </Col>
              </>
            ) : (
              <Col xs={12} className="px-3">
                <h6
                  className="w-100 h-100 my-3"
                  style={{ wordWrap: "break-word" }}
                >
                  {data.text}
                </h6>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
      <Row className="px-2 border-top">
        <Col className="mirko-post-body w-100 my-2 ">
          <div className={"d-flex justify-content-around my-0"}>
            <Button className={"mirko-btn d-flex align-items-center"}>
              <BsHandThumbsUp className={"mr-2"} />
              Like
            </Button>
            <Button className={"mirko-btn d-flex align-items-center"}>
              <BiMessageRoundedDetail className={"mr-2"} />
              Comment
            </Button>
            <Button className={"mirko-btn d-flex align-items-center"}>
              <BsArrow90DegRight className={"mr-2"} />
              Share
            </Button>
            <Button className={"mirko-btn d-flex align-items-center"}>
              <FiSend className={"mr-2"} />
              Send
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
