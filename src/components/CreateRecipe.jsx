import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
  const [validated, setValidated] = useState(false);
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
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   setValidated(true);
    //   return;
    // }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    try {
      const response = await fetch("http://localhost:8080/app/ricetta", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Recipe created.");
        alert("Recipe created!");
        navigate("/recipe-list");
      } else {
        console.log("Error during recipe creation " + formData);
        alert("Error during creation!");
      }
    } catch (error) {
      console.log("Error occurred during creation request");
      alert(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="my-4">
      {!localStorage.getItem("token") ? (
        <>
        <Row className="d-flex justify-content-center">
            <Col
              className="text-white d-flex flex-column justify-content-center align-items-center glass mb-1"
              xs={8}
              >
                
          <h2 className="my-4">Register or Login <br /> to create your own recipe!</h2>
          <div className="d-flex justify-content-between mt-3">
            <a href="/register-page">
              <button className="linkNav me-4">Register</button>
            </a>
            <a href="/login-page">
              <button className="linkNav">Login</button>
            </a>
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
              validated={validated.toString()} // Convert boolean to string
            >
              <p className="title text-center fs-3">Create your recipe</p>
              <p className="message">
                You can provide up to 9 ingredients per recipe; video and
                pictures are not mandatory.
              </p>
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
                  <option selected value="EASY">EASY</option>
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
              <button className="submit my-4 text-dark bottone">Submit</button>
            </form>
          </div>
        </>
      )}
    </Container>
  );
}

export default CreateRecipe;
