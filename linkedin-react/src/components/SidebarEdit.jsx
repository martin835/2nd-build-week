import { Col, Container, Row } from "react-bootstrap";
import { BsQuestionCircleFill } from "react-icons/bs";

const SidebarEdit = () => {
  return (
    <Container>
      <Row>
        <>
          <div className="ali-side-edit w-100 px-2 border">
            <p className="my-0 py-3  border-bottom d-flex justify-content-between">
              Edit public profile & Url
              <BsQuestionCircleFill />
            </p>
            <p className="my-0 py-3 d-flex justify-content-between">
              Add profile in another language
              <BsQuestionCircleFill />
            </p>
          </div>
        </>
      </Row>
    </Container>
  );
};

export default SidebarEdit;
