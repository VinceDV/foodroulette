import { Multiselect } from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import doge from "../media/pics/doge.png";
import SingleRecipe from "./SingleRecipe";

const RecipeList = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ingredientProperties = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
    "strIngredient6",
    "strIngredient7",
    "strIngredient8",
    "strIngredient9",
  ];

  const useDocumentClick = (callback) => {
    useEffect(() => {
      const handleClick = (e) => {
        if (
          !e.target.classList.contains("multiselect-selected-text") &&
          !e.target.classList.contains("multiselect-search")
        ) {
          callback();
        }
      };

      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [callback]);
  };

  useDocumentClick(() => {
    setIsDropdownOpen(false);
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch("http://localhost:8080/app/ricetta", requestOptions)
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

  if (loading) {
    return <div className="text-light">Loading...</div>;
  }

  const handleOptionClick = (selectedList) => {
    setSelectedOptions(selectedList.map((option) => option.name));
  };

  const filteredRecipes =
    selectedOptions.length > 0
      ? records.filter((meal) => {
          const ingredients = ingredientProperties
            .map((prop) => meal[prop])
            .filter((ingredient) => ingredient !== null && ingredient !== "");
          return selectedOptions.every((option) =>
            ingredients.some(
              (ingredient) =>
                ingredient &&
                typeof ingredient === "string" &&
                ingredient.toLowerCase().includes(option.toLowerCase())
            )
          );
        })
      : [];

  const ingredientOptions = Array.from(
    new Set(
      records.flatMap((meal) =>
        ingredientProperties
          .map((prop) => meal[prop])
          .filter((ingredient) => ingredient !== null && ingredient !== "")
      )
    )
  )
    .filter((ingredient) => ingredient !== "")
    .sort((a, b) => a.localeCompare(b))
    .map((ingredient) => ({ name: ingredient }));

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center my-5">
        <Col className="col-6 col-md-4">
          <Form.Group>
            {selectedOptions && filteredRecipes.length === 0 ? (
              <h1 className="text-light mb-5">
                Select ingredients <br></br>you have:
              </h1>
            ) : (
              <h1 className="text-light mb-5">
                Click on a recipe to find out more!
              </h1>
            )}
            <Multiselect
              options={ingredientOptions}
              selectedValues={selectedOptions.map((name) => ({ name }))}
              onSelect={handleOptionClick}
              onRemove={handleOptionClick}
              displayValue="name"
              placeholder={
                selectedOptions.length > 0 ? "" : "Select ingredients"
              }
              closeOnSelect={false}
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                multiselectContainer: { backgroundColor: "#f2f2f2" },
                searchBox: { background: "transparent" },
                inputField: { background: "#f2f2f2", color: "#444" },
                optionHover: {
                  background: selectedOptions.length > 0 ? "#fff" : "",
                  color: selectedOptions.length > 0 ? "" : "",
                },
                optionContainer: { background: "#444", color: "#fff" },
                chips: { background: "#444" },
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        {selectedOptions && filteredRecipes.length === 0 && (
          <Col className="col-sm-6">
            <img
              className="mb-4"
              src={doge}
              alt="doggo"
              style={{ width: "40%" }}
            />
            <h3 className="text-light">Wow, such empty</h3>
          </Col>
        )}
        {filteredRecipes.map((meal) => (
          <Col
            className="mb-5 col-xs-3 mx-1 d-flex justify-content-center flex-wrap"
            xs={6}
            lg={3}
            key={meal.idMeal}
          >
            <SingleRecipe recipe={meal} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RecipeList;
