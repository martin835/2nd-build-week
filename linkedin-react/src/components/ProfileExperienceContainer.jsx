import { Modal, Button, Form } from "react-bootstrap";
import OneExperienceCard from "./OneExperienceCard";
import { useState, useEffect } from "react";


function ProfileExperienceContainer() {

  const [experiences, setExperiences] = useState(null);
  const [newExperience, setNewExperience] = useState({    
    role: "",
    company: "",
    startDate: "",
    endDate: null,
    description: "",
    area: ""
  });
  const [lgShow, setLgShow] = useState(false);

   useEffect(() => {
     loadExperiences();
   }, []);

   const loadExperiences = async () => {
     let user = "62134b69be40b50015b6c935";
     //5fc4af46b708c200175de88f
     try {
       let response = await fetch(
         "https://striveschool-api.herokuapp.com/api/profile/" +
           user +
           "/experiences",
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
         console.log(data);
         setExperiences(data);
       } else {
         alert("something went wrong :(");
       }
     } catch (error) {
       console.log(error);
     }
   };

   const submitNewJob = async (e) => {
      e.preventDefault();
      console.log(newExperience);

           let user = "62134b69be40b50015b6c935";
           //5fc4af46b708c200175de88f
           try {
             let response = await fetch(
               "https://striveschool-api.herokuapp.com/api/profile/" +
                 user +
                 "/experiences",
               {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                   Authorization:
                     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGI2OWJlNDBiNTAwMTViNmM5MzUiLCJpYXQiOjE2NDU0MzE2NTcsImV4cCI6MTY0NjY0MTI1N30.sW4qGqsabPColujp6kpA3P6pfCQ-VN9D8e5WEW1RdTI",
                 },
                 body: JSON.stringify(newExperience),
               }
             );
             if (response.ok) {
               let data = await response.json();
               console.log(data);
               loadExperiences();
              
             } else {
               alert("something went wrong :(");
             }
           } catch (error) {
             console.log(error);
           }
   } 

  return (
    <div className="p-3 bg-white mt-3 mb-5 martin-profile-experience-container">
      <div className="d-flex mb-4">
        <h4 className="mr-auto">Experience</h4>
        <div
          className="martin-profile-icon-large mr-4"
          onClick={() => setLgShow(true)}
        >
          <i className="bi bi-plus-lg"></i>
        </div>
        <div className="martin-profile-icon-large mr-4">
          <i className="bi bi-pencil"></i>
        </div>
      </div>
      {experiences &&
        experiences.map((experience) => (
          <OneExperienceCard
            key={experience._id}
            role={experience.role}
            id={experience.id}
            company={experience.company}
            startDate={experience.startDate}
            endData={experience.endDate}
            description={experience.description}
            area={experience.area}
            image={experience.image}
          />
        ))}
      {/* MODAL BELOW */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-add-new-experience">
            Add Experience
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => submitNewJob(e)}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="roleValue">
              <Form.Label>Job title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. Content Promoter"
                value={newExperience.role}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, role: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="companyValue">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company name"
                value={newExperience.company}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    company: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descriptionValue">
              <Form.Label>Job description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. completely extend corporate architectures "
                value={newExperience.description}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    description: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="areaValue">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. London"
                value={newExperience.area}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, area: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-inline-block martin-width-45"
              controlId="startDateValue"
            >
              <Form.Label>Start date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newExperience.startDate}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    startDate: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 float-right d-inline-block  martin-width-45"
              controlId="endDateValue"
            >
              <Form.Label>End date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newExperience.endDate}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, endDate: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              className="martin-profile-main-btn mb-2 mb-lg-0"
            >
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/*  MODAL END  */}
    </div>
  );
}

export default ProfileExperienceContainer;
