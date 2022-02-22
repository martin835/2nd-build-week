import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";

const ProfileList = () => {
  const [profile, setProfile] = useState([]);
  // const [tempData, setTempData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchPeopleYouKnow(), []);

  const fetchPeopleYouKnow = async () => {
    let arrayOfRandom = [];

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
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
        let fetchedData = await response.json();
        console.log("fetched Correctly", fetchedData);

        for (let i = 0; i < 5; i++) {
          let x = Math.floor(Math.random() * 200);
          arrayOfRandom.push(fetchedData[x]);
        }
        console.log(arrayOfRandom);
        setProfile(arrayOfRandom);
        console.log("it worked", profile);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Gbemi-container border-bottom">
      <h5 className="my-3 py-3">People you may know</h5>
      {profile.map((data) => (
        <ProfileCard profiles={data} />
      ))}
    </div>
  );
};

export default ProfileList;
