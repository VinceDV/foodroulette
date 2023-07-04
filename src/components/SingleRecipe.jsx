import { useState } from "react";
import { Card } from "react-bootstrap";

function SingleRecipe(props) {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      onClick={() => setSelected(!selected)}
      style={{
        maxWidth: "340px",
        cursor: "pointer",
        border: selected ? "1px solid red" : "none",
      }}
    >
      <Card.Img variant="top" src={props.recipe.strMealThumb} />
      <Card.Body className="pt-2 pb-0">
        <Card.Title>
          <p>
            {props.recipe.strMeal} - {props.recipe.strArea}
          </p>
        </Card.Title>
        {selected && <p>{props.recipe.strInstructions}</p>}
      </Card.Body>
    </Card>
  );
}

export default SingleRecipe;
