import React from "react";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div
    id="jumbo"
      className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
      style={{ backgroundImage: "", height: 400}}
    >
      <div
        className="mask p-5"
        
      >
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col className="col-md-12 text-white"  style={{ backgroundImage: "", width: 400 }}>
            <h1 className="d-flex justify-content-center align-items-center mb-3">FoodRoulette</h1>
            <h4 className="mb-3">
              Is it a soup? Is it a sub?<br></br> Your fridge decides!
            </h4>
            <a
              className="btn btn-outline-light btn-lg"
              href="/recipe-list"
              role="button"
            >
              Let's get cooking!
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
