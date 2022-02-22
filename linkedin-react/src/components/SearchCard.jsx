import { Row, Col } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const SearchCard = () => {
  return (
    <Col xs={12}>
      <Row className="my-2">
        <Col xs={1}>
          <BsPersonCircle className="ali-search-user" />
        </Col>
        <Col xs={9} className="border-bottom pl-0">
          <div>
            <p className="ali-search-name my-0">Professor Martin Spraggon</p>
            <p className="ali-search-role my-0"> CEO at 5ROI Global</p>
            <p className="ali-search-location my-0">
              Dubai, United Arab Emirates
            </p>
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
