import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleRecipe(props) {
  return (
    <Card
      className="carte">
      <Link to={"/specrec/" + props.recipe.idMeal}><Card.Img variant="top" src={props.recipe.strMealThumb} /></Link>
      <Card.Body className="pt-2 pb-0">
        <Card.Title>
          <p className="p-0" style={{fontSize: ".9em"}}>
            {props.recipe.strMeal} - {props.recipe.strArea}
          </p>
        </Card.Title>
      </Card.Body>
    </Card>

  );
}

export default SingleRecipe;
