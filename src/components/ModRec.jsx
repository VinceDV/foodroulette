import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
function ModRecipe() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    strMeal: "",
    strMealThumb: "",
    strArea: "",
    strYoutube: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    difficulty: "",
    tempoPreparazione: "",
    strInstructions: "",
  });

  const params = useParams();
  const id = params.id;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8080/app/ricetta/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/app/ricetta/" + id,
        requestOptions
      );

      if (response.ok) {
        console.log("Recipe modified.");
        alert("Recipe modified!");
        navigate("/recipe-list");
      } else {
        console.log("Error during recipe modification " + formData);
        alert("Error during modification!");
      }
    } catch (error) {
      console.log("Error occurred during edit request");
      alert(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/app/ricetta/" + id,
        requestOptions
      );

      if (response.ok) {
        console.log("Recipe deleted.");
        alert("Recipe deleted!");
        navigate("/recipe-list");
      } else {
        console.log("Error during recipe deletion " + formData);
        alert("Error during deletion!");
      }
    } catch (error) {
      console.log("Error occurred during delete request");
      alert(error);
    }
  };

  return (
    <Container className="my-4">
      {localStorage.getItem("username") !== "VinceDV" &&
      localStorage.getItem("username") !== "MariG" ? (
        <>
          <Row className="d-flex justify-content-center">
            <Col
              className="text-white d-flex flex-column justify-content-center align-items-center glass mb-1"
              xs={8}
            >
              <h2 className="my-4">
                Unauthorized! <br />
                Recipes can be edited only by admins!
              </h2>
              <div className="d-flex justify-content-between mt-3">
                <button onClick={() => navigate(-1)} className="linkNav">
                  Go back
                </button>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <div className="container d-flex justify-content-center">
            <form
              className="formReg"
              onSubmit={handleSubmit}
              noValidate
              validated={validated.toString()}
            >
              <p className="title text-center fs-3">Edit recipe</p>
              <label className="mb-2">
                <span>Name</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input"
                  name="strMeal"
                  value={formData.strMeal}
                  onChange={handleChange}
                />
              </label>
              <label className="mb-2">
                <span>Picture (insert picture url)</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input"
                  name="strMealThumb"
                  value={formData.strMealThumb}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Country of origin</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strArea"
                  value={formData.strArea}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Video (insert video url)</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strYoutube"
                  value={formData.strYoutube}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Ingredient 1</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient1"
                  value={formData.strIngredient1}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 2</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient2"
                  value={formData.strIngredient2}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 3</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient3"
                  value={formData.strIngredient3}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 4</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient4"
                  value={formData.strIngredient4}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 5</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient5"
                  value={formData.strIngredient5}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 6</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient6"
                  value={formData.strIngredient6}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 7</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient7"
                  value={formData.strIngredient7}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 8</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient8"
                  value={formData.strIngredient8}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Ingredient 9</span>
                <input
                  required
                  placeholder=""
                  type="text"
                  className="input mb-3"
                  name="strIngredient9"
                  value={formData.strIngredient9}
                  onChange={handleChange}
                />
              </label>
              <label className="d-flex flex-column">
                <span className="me-3">Difficulty</span>
                <select
  className="text-center mb-3"
  name="difficulty"
  value={formData.difficulty}
  onChange={handleChange}
>
  <option value="EASY">EASY</option>
  <option value="MEDIUM">MEDIUM</option>
  <option value="HARD">HARD</option>
</select>

              </label>
              <label>
                <span>Preparation time (in minutes)</span>
                <input
                  required
                  placeholder=""
                  type="number"
                  className="input mb-3"
                  name="tempoPreparazione"
                  value={formData.tempoPreparazione}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span style={{ fontSize: "1.3em" }}>Instructions</span>
                <textarea
                  name="strInstructions"
                  cols="30"
                  rows="10"
                  value={formData.strInstructions}
                  onChange={handleChange}
                ></textarea>
              </label>
              <button className="submit my-4 text-dark bottone">Edit</button>
              <Button
                className="delete text-light bg-danger"
                onClick={handleShow}
              >
                Delete
              </Button>
            </form>
          </div>
        </>
      )}
      {/* MODAL */}
      <Modal show={show} onHide={handleClose} bgVariant="dark">
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete this recipe?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          By clicking <span className="text-danger">Delete</span> you will
          permanently delete <br />'{formData.strMeal}'. <br />
          Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      );
      {/* MODAL */}
    </Container>
  );
}

export default ModRecipe;
