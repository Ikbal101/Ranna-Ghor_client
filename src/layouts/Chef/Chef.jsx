import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Chef.css";
import { Link } from "react-router-dom";


const Chef = ({ chef }) => {
  const {_id, picture, author, experience, recipes, likes } = chef;
  console.log(chef);

  return (
    <div className="chef-card">
      {
        <div className="chef-card-content">
          <Card>
            <div className="imges">
            <Card.Img variant="top" src={picture} />
            </div>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <div>Name:{author.name}</div>
                <div>Years of Experience: {experience}</div>
                <div>Number of Recipes: {recipes}</div>
                <div>Likes: {likes}</div>
              </Card.Text>
              <Button variant="primary"><Link to={`/news/details/${_id}`} style={{textDecoration:"none",color:"#fff",fontWeight:"500"}}>Viw Recipes</Link></Button>
            </Card.Body>
          </Card>
        </div>
      }
    </div>
  );
};

export default Chef;
