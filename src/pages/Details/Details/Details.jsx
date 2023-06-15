import React, { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Details.css';
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {
  // const [disableButton, setDisableButton] = useState(false);
  
  const notify = () => toast("You added this recipe as your favourite recipe");
  // const notify1 = () => toast("You added this recipe as your favourite recipe");
  // const notify2 = () => toast("You added this recipe as your favourite recipe");

  const showToastButton = (event) => {
    notify();
    event.target.disabled = true;
  }

  const details = useLoaderData();
  console.log(details);

  const { author, picture, recipes, likes, experience, description, recipesImg, recipesImg1, recipesImg2, recipe } = details;

  return (
    <div>
      <Card className='card-set mx-auto'>
        <Card.Img variant="top" src={picture} className='image-set' />
        <Card.Body>
          <Card.Title> <span className='card-title'>Name:</span>{author.name}</Card.Title>
          <p><span className='card-title'>Likes:</span> {likes}</p>
          <p> <span className='card-title'>Recipes:</span>{recipes}</p>
          <p><span className='card-title'>Experience:</span>{experience} Years</p>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>

      <div className='mt-5'>
        <h2 className='text-warning text-center mb-4'>---Recipe section---</h2>
        <hr className='hr' />
        <CardGroup className='gap-4 '>
          <Card className='border border-warning' >
            <Card.Img variant="top" src={recipesImg} className="recipes-img" />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text></Card.Text>
              <div><span className='fw-bold'>Ingredients:</span>{recipe.ingredients}</div>
              <div> <span className='fw-bold'>How to cook:</span> {recipe.cookingMethod}</div>
            </Card.Body>
            <Card.Footer>
              <Button className='btn btn-warning text-bold' 
              onClick={
                showToastButton
              } >Favourite</Button>
            </Card.Footer>
          </Card>
          <Card className='border border-warning'>
            <Card.Img variant="top" src={recipesImg1} className="recipes-img" />
            <Card.Body>
              <Card.Title>{recipe.name1}</Card.Title>
              <Card.Text>
                <div><span className='fw-bold'>Ingredients:</span>{recipe.ingredients}</div>
                <div> <span className='fw-bold'>How to cook:</span> {recipe.cookingMethod}</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button className='btn btn-warning text-bold' onClick={showToastButton}  >Favourite</button>
            </Card.Footer>
          </Card>
          <Card className='border border-warning'>
            <Card.Img variant="top" src={recipesImg2} className="recipes-img" />
            <Card.Body>
              <Card.Title>{recipe.name2}</Card.Title>
              <Card.Text>
                <div><span className='fw-bold'>Ingredients:</span>{recipe.ingredients}</div>
                <div> <span className='fw-bold'>How to cook:</span> {recipe.cookingMethod}</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className='btn btn-warning text-bold' onClick={showToastButton}  >Favourite</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Details;
