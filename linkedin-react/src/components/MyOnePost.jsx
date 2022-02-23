import { Row, Col } from "react-bootstrap";

function MyOnePost(props) {
  return (
     <Row>
         <Col>
         {props.text} 
         </Col>
     </Row>
  )
}

export default MyOnePost;
