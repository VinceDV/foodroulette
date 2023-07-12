import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import hungry from "../media/pics/hungry.png";

function SpecRec(props) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + params.id,
      requestOptions
    )
      .then((response) => {response.json()
      console.log(response)})
      .then((data) => {
        setRecords(data.meals);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // var requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  // };

  //   const fetch = async () => {
  //       try {
  //         const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + params, requestOptions, {
  //           method: "GET",
  //         });
  //         if (response.ok) {
  //           const authControll = await response.json();
  //           console.log(authControll)
  //           } else if (response.status === 400 || response.status === 500) {
  //           alert("credenziali non valide");
  //         }
  //       } catch (error) {
  //         console.log(error + " sono l'errore");
  //       }
  //     };
  // fetch();
  if (loading) {
    return <div className="text-light">Loading...</div>;
  }
  return (
    <>
      <Row>
        <Col xs={12}>
          {records && records.length > 0 ? (
            <Card
              className="carte d-flex justify-content-center align-items-center"
              style={{
                maxWidth: "340px",
                cursor: "pointer",
              }}
            >
              <Card.Img
                variant="top"
                src={records[0].strMealThumb}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Card.Body className="pt-2 pb-0">
                <Card.Title>
                  <p>titolo</p>
                </Card.Title>
              </Card.Body>
            </Card>
          ) : (
            <Col>
              <div className="text-light d-flex flex-column justify-content-center align-items-center mt-5">
                <img
                  src={hungry}
                  alt="hungry pic"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h2 className="mt-5">Something went wrong! Recipe not found!</h2>
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
