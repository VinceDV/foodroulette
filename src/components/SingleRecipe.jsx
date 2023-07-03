import { useState } from "react";
import { Card } from "react-bootstrap";

function SingleRecipe(props) {
  
  const [selected, setSelected] = useState(false)

  return (
    <Card style={{ border: selected ? '1px solid red' : 'none' }}>
        <Card.Img onClick={() => setSelected(!selected)}
         variant="top" src={props.recipe.strMealThumb} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            <p>{props.recipe.strMeal} - {props.recipe.strArea}</p>
          </Card.Title>
          {selected&&<p>{props.recipe.strInstructions}</p>}
        </Card.Body>
      </Card>
  );
}

export default SingleRecipe;