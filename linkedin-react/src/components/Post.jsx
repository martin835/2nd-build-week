
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsDot, BsThreeDots, BsHandThumbsUp } from "react-icons/bs"
import { BiWorld, BiMessageRoundedDetail } from "react-icons/bi"
import { BsArrow90DegRight } from "react-icons/bs"
import { FiSend } from "react-icons/fi"

const Post = ({ data }) => {

    console.log(data);

    const followers = Math.floor(Math.random() * 10000)
    const days = Math.floor(Math.random() * 15)

    return (
        <Container className={"mirko-posts-container px-3"}>
            <Row>
                <Col className={"mirko-post mt-3"}>
                    <div className={"mirko-post-header"}>
                        <div className={"d-flex justify-content-between"}>
                            <div className={"d-flex flex-row mb-3"}>
                                <img className={"mt-2"} src={data.user?.image} alt="user profile" width="40" height="40"></img>
                                <Col className={"d-flex flex-column"}>
                                    <h6 className={"mirko-post-text fw-bold my-0"}>{data.user?.name} {data.user?.surname}</h6>
                                    <h6 className={"mirko-post-text2 my-0"}>{`${followers} followers`}</h6>
                                    <h6 className={"mirko-post-text2 my-0"} >{`${days} followers`}
                                        < BsDot />
                                        < BiWorld />
                                    </h6>
                                </Col>
                            </div>
                            < BsThreeDots className={"three-dots"} />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>{data.text}</h6>
                </Col>
            </Row>
            <Row className={"px-2"}>
                <Col className="mirko-post-body w-100 my-2 border-top">
                    <div className={"d-flex justify-content-around"}>
                        <Button className={"mirko-btn d-flex align-items-center"}><BsHandThumbsUp className={'mr-2'} />Like</Button>
                        <Button className={"mirko-btn"}><BiMessageRoundedDetail className={'mr-2'} />Comment</Button>
                        <Button className={"mirko-btn"}><BsArrow90DegRight className={'mr-2'} />Share</Button>
                        <Button className={"mirko-btn"}><FiSend className={'mr-2'} />Send</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Post