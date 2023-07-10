import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Fireplace.scss";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div
        id="jumbo"
        className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
        style={{ backgroundImage: "", height: 400 }}
      >
        <div className="mask p-5">
          <Row className="d-flex justify-content-center h-100">
            <Col
              className="col-xs-12 text-white d-flex flex-column justify-content-center align-items-center glass"
              style={{
                backgroundImage: "",
                width: 400,
                boxSizing: "content-box",
                marginTop: "24em", // Add top margin here
              }}
            >
              <h1 className="d-flex justify-content-center align-items-center mb-3">
                FoodRoulette
              </h1>
              <h4 className="mb-3">
                Is it a soup? Is it a sub?<br></br> Your fridge decides!
              </h4>
              <a
                className="btn btn-outline-light btn-lg mt-5"
                href="/recipe-list"
                role="button"
              >
                Let's get cooking!
              </a>
              <div className="d-flex justify-content-center">
                <div className="fireplace">
                  <div className="blur">
                    <div className="fireplace__flame_big"></div>
                  </div>
                  <section className="fireplace__log"></section>
                  <section className="fireplace__log"></section>
                  <section className="fireplace__log"></section>
                  <section className="fireplace__log"></section>
                  <section className="fireplace__log"></section>
                  <section className="fireplace__log"></section>
                  <section className="fireplace__log"></section>
                  <main className="fireplace__spark"></main>
                  <main className="fireplace__spark"></main>
                  <main className="fireplace__spark"></main>
                  <main className="fireplace__spark"></main>
                  <div className="blur fix">
                    <div className="fireplace__flame"></div>
                  </div>
                  <div className="fireplace__light"></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
