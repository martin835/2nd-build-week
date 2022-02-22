import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SearchCard from "./SearchCard";
import { useNavigate } from "react-router-dom";

const Search = ({ query }) => {
  const [arrayOfPeople, setArrayOfPeople] = useState([]);
  const searchQuery = async () => {
    try {
      let resp = await fetch(
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
      if (resp.ok) {
        let body = await resp.json();
        setArrayOfPeople(body);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => searchQuery(), [query]);

  return (
    <Container className="ali-search-container mt-3 py-3">
      <Row>
        {arrayOfPeople
          .filter((p) => p.name.toLowerCase().includes(query))
          .map((person) => (
            <SearchCard
              name={person.name}
              surname={person.surname}
              image={person.image}
              key={person._id}
              title={person.title}
              location={person.area}
            />
          ))}

        {/* <SearchCard />
        <SearchCard /> */}
      </Row>
      <Row
        className="justify-content-center "
        style={{
          color: "rgb(114, 110, 110)",
          fontWeight: "700",
          fontSize: "1rem",
        }}
      >
        See all people Results
      </Row>
    </Container>
  );
};

export default Search;
