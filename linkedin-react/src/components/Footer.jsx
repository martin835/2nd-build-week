import { Container, Row, Col } from "react-bootstrap";
import {
  BsLinkedin,
  BsQuestionCircleFill,
  BsFillGearFill,
} from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <div className="d-flex align-items-center ">
        <h1 className="linkedIN my-0">Linked</h1>
        <BsLinkedin className="footer-logo" />
      </div>
      <Row>
        <Col xs={6}>
          <Row>
            <Col xs={4} className="footer-link mt-2">
              About
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Accessibility
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Talent Solutions
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Community Guidelines
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Careers
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Marketing Solutions
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Privacy & Terms
              <MdOutlineKeyboardArrowDown />
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Ad Choices
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Advertising
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Sales Solutions
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Mobile
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Small Business
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Safety Center
            </Col>
            <Col xs={4} className="footer-link mt-2">
              Mobile
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6} className="d-flex align-items-start px-0">
              <BsQuestionCircleFill className="footer-icon mr-2" />
              <div>
                <p className="footer-right-desc my-0">Questions?</p>
                <p className="footer-right-small-desc my-0">
                  Visit our Help Center.
                </p>
              </div>
            </Col>
            <Col xs={6}>
              <label htmlFor="language" className="select-language my-0">
                Select Language
              </label>
              <select id="language" className="language-selector py-1">
                <option>English</option>
                <option>German</option>
                <option>Italian</option>
                <option>Turkish</option>
                <option>Russian</option>
                <option>Arabic</option>
              </select>
            </Col>
            <Col xs={6} className="d-flex align-items-start px-0">
              <BsFillGearFill className="footer-icon2 mr-2" />
              <div>
                <p
                  className="footer-right-desc my-0"
                  style={{ color: "#8344CC" }}
                >
                  Manage your account and privacy
                </p>
                <p className="footer-right-small-desc my-0">
                  Go to your Settings.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="corporation my-4">LinkedIn Corporation © 2022</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
