import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SearchCard from "./SearchCard";

const Search = ({ searchedQuery }) => {
  const searchQuery = async () => {
    console.log("this is the search" + searchedQuery);
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
        setIsLoading(false);

        setArrayOfPeople(body);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [arrayOfPeople, setArrayOfPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => searchQuery(), []);
  return (
    <Container className="ali-search-container my-4 py-3">
      <Row>
        {isLoading ? (
          <div className=" w-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          arrayOfPeople
            .filter((p) =>
              p.name.toLowerCase().includes(searchedQuery.toLowerCase())
            )
            .map((person) => {
              return (
                <SearchCard
                  name={person.name}
                  surname={person.surname}
                  image={person.image}
                  keyID={person._id}
                  title={person.title}
                  location={person.area}
                />
              );
            })
        )}

        {console.log("who is first")}
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
