import { Container, Row, Col } from "react-bootstrap";
import SearchCard from "./SearchCard";

const Search = () => {
  return (
    <Container className="ali-search-container mt-3 py-3">
      <Row>
        <SearchCard />
        <SearchCard />
        <SearchCard />
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
