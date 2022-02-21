import { Container, Row, Col } from "react-bootstrap";
import OneExperienceCard from "./OneExperienceCard";


function ProfileExperienceContainer() {
  return (
    <div className="p-3 border border-secondary rounded-lg  mt-3">
      <div className="d-flex mb-4">
        <h4 className="mr-auto">Experience</h4>
        <div className="martin-profile-icon-large mr-4">
          <i className="bi bi-plus-lg"></i>
        </div>
        <div className="martin-profile-icon-large mr-4">
          <i className="bi bi-pencil"></i>
        </div>
      </div>
      <OneExperienceCard/>
    </div>
  );
}

export default ProfileExperienceContainer;
