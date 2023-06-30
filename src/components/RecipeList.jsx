import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SingleRecipe from "./SingleRecipe";

// import Select, {
//   components,
//   MultiValueGenericProps,
//   MultiValueProps,
//   OnChangeValue,
//   Props,
// } from 'react-select';
// import {
//   SortableContainer,
//   SortableContainerProps,
//   SortableElement,
//   SortEndHandler,
//   SortableHandle,
// } from 'react-sortable-hoc';

const RecipeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  //

  //
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleInputClick = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSelectedOption(null);
    setIsOpen(!isOpen);
    setSearchQuery("");
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsOpen(true);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchQuery(option);
    setIsOpen(false);
  };

  const ingredientProperties = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
  ];

  let filteredOptions = ingredientProperties.reduce((acc, prop) => {
    const ingredientOptions = records
      .map((meal) => meal[prop])
      .filter((option) =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return acc.concat(ingredientOptions);
  }, []);

  filteredOptions = [...new Set(filteredOptions)].sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col className="col-4">
          <Form.Group>
            <Form.Label>Search a recipe</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onClick={handleInputClick}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {isOpen && filteredOptions.length > 0 && (
          <Col>
            <ul className="text-decoration-none">
              {filteredOptions.map((option) => (
                <li
                  key={option}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </Col>
        )}
      </Row>
      <Row>
        {selectedOption && (
          <Col>
            <p>Selected Option: {selectedOption}</p>
          </Col>
        )}
      </Row>
      <Row>
        {records
          .filter((meal) => {
            const ingredients = [
              meal.strIngredient1,
              meal.strIngredient2,
              meal.strIngredient3,
              meal.strIngredient4,
              meal.strIngredient5,
            ];
            return ingredients.some(
              (ingredient) =>
                ingredient &&
                ingredient.toLowerCase() === selectedOption?.toLowerCase()
            );
          })
          .map((meal) => (
            <Col xs={12} md={4} key={meal.idMeal}>
              <SingleRecipe recipe={meal} />
            </Col>
          ))}
      </Row>
    </>
    // <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
    //   <div>
    //     <h3 style={{color:"red"}}>Multiselect DropDown useState</h3>
    //     <Multiselect options={options} displayValue={}></Multiselect>
    //   </div>
    // </div>
  );
};

export default RecipeList;
