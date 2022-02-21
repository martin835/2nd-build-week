import {
  BsLinkedin,
  BsFillPeopleFill,
  BsBriefcaseFill,
  BsFillChatRightTextFill,
  BsFillBellFill,
  BsPersonCircle,
  BsGrid3X3GapFill,
  BsCaretDownFill,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Badge,
} from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-0">
      <Container>
        <BsLinkedin className="ali-linkedIn-logo mr-2" />
        <Form inline className="py-0">
          <FormControl
            style={{ height: "3rem", backgroundColor: "#EEF3F8" }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className="d-flex flex-column align-items-center ml-5 py-2 position-relative">
              <div className="ali-navbar-notification"></div>
              <AiFillHome className="ali-navbar-icons " />
              <p className="my-0 ali-navbar-icon-description">Home</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 py-2">
              <BsFillPeopleFill className="ali-navbar-icons" />
              <p className="my-0 ali-navbar-icon-description">My Network</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 py-2">
              <BsBriefcaseFill className="ali-navbar-icons" />
              <p className="my-0 ali-navbar-icon-description">Jobs</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 py-2">
              <BsFillChatRightTextFill className="ali-navbar-icons" />
              <p className="my-0 ali-navbar-icon-description">Messaging</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 py-2">
              <BsFillBellFill className="ali-navbar-icons" />
              <p className="my-0 ali-navbar-icon-description">Notifications</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 py-2">
              <BsPersonCircle className="ali-navbar-icons" />
              <p className="my-0 ali-navbar-icon-description">
                Me
                <BsCaretDownFill className="mb-1" />
              </p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 border-left pl-5 py-2">
              <BsGrid3X3GapFill className="ali-navbar-icons" />
              <p className="my-0 ali-navbar-icon-description">
                Work
                <BsCaretDownFill className="mb-1" />
              </p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
