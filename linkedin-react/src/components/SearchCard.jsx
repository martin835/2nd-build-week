import { Row, Col } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ keyID, title, name, surname, location, image }) => {
  const navigate = useNavigate();
  let idKey = "/" + keyID;
  return (
    <Col xs={12}>
      {/* {console.log("this is the key" + keyID)} */}
      <Row className="my-2" style={{ cursor: "pointer" }}>
        <Col xs={1}>
          <BsPersonCircle className="ali-search-user" />
        </Col>
        <Col xs={9} className="border-bottom pl-0">
          <div>
            <p className="ali-search-name my-0" onClick={() => navigate(idKey)}>
              {name}
              {" " + surname}
            </p>
            <p className="ali-search-role my-0"> {title}</p>
            <p className="ali-search-location my-0">{location}</p>
            <p className="ali-search-connection my-0">
              <span className="ali-span-connection">Meriem Sehrewerdi</span> is
              a shared connection
            </p>
          </div>
        </Col>
        <Col xs={2} className="border-bottom">
          <button className="search-connect">Connect</button>
        </Col>
      </Row>
    </Col>
  );
};

export default SearchCard;
