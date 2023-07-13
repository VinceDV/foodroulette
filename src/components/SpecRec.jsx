import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import hungry from "../media/pics/hungry.png";

function SpecRec(props) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch("http://localhost:8080/app/ricetta/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(records);

  if (loading) {
    return <div className="text-light">Loading...</div>;
  }
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col
          className="d-flex justify-content-center align-items-center mt-3 flex-column glass w-50"
          xs={12}
        >
          {records != null ? (
            <>
              <Card
                className="carte d-flex justify-content-center align-items-center"
                style={{
                  maxWidth: "500px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={records.strMealThumb}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Card.Body className="pt-2 pb-0">
                  <Card.Title>
                    <p>
                      {records.strMeal} - {records.strArea}
                    </p>{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
              <div className="d-flex justify-content-center flex-column text-light mt-5">
                <Row className="d-flex justify-content-around">
                  <Col xs={12} lg={3}>
                    <h4 className="text-start mb-2">Ingredients</h4>
                    <ul className="text-start ps-2" style={{color: "rgb(43, 42, 41)"}}>
                      {Object.keys(records).map((key) => {
                        if (key.includes("strIngredient") && records[key]) {
                          return <li key={key}>{records[key]}</li>;
                        }
                        return null;
                      })}
                    </ul>
                  </Col>
                  <Col xs={12} lg={3}>
                    <h4 className="text-start mb-2">Difficulty</h4>
                    <p className="text-start" style={{color: "rgb(43, 42, 41)"}}>{records.difficulty}</p>
                  </Col>
                  <Col xs={12} lg={3}>
                    <h4 className="text-start mb-2">Cooking Time</h4>
                    <p className="text-start" style={{color: "rgb(43, 42, 41)"}}>{records.tempoPreparazione}m</p>
                  </Col>
                  <Col xs={12} className="mb-5">
                    <h4 className="text-center mb-3">Instructions</h4>
                    <p className="text-start" style={{color: "rgb(43, 42, 41)"}}>{records.strInstructions}</p>
                  </Col>
                  <Col xs={12} className="d-flex justify-content-center align-items-center flex-column">
                    <Link className="btn btn-warning mb-5 py-3" target="_blank" to={records.strYoutube}>Watch Recipe</Link>
                    <a
                  className="btn btn-outline-light btn-lg"
                  href="/recipe-list"
                  role="button"
                >
                  Try again!
                </a>
                  </Col>
                </Row>
              </div>
            </>
          ) : (
            <Col>
              <div className="text-light d-flex flex-column justify-content-center mt-5">
                <img
                  src={hungry}
                  alt="hungry pic"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h2 className="mt-5">
                  Something went wrong! Recipe not found!
                </h2>
                <a
                  className="btn btn-outline-light btn-lg mt-4"
                  href="/recipe-list"
                  role="button"
                >
                  Try again!
                </a>
              </div>
            </Col>
          )}
        </Col>
      </Row>
    </>
  );
}

export default SpecRec;

// src={props.recipe.strMealThumb}
// <p>{props.recipe.strMeal} - {props.recipe.strArea}</p>
//         {/* <p>{props.recipe.strInstructions}</p> */}
