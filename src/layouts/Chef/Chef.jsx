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
                <div><span className="text-bold ">Name:</span> <span className="text-success"></span>{author.name}</div>
                <div> <span className="text-bold "> Years of Experience : </span><span className="text-secondary">{experience}</span></div>
                <div><span className="text-bold "> Number of Recipes :</span> <span className="text-warning">{recipes}</span></div>
                <div> <span className="text-bold ">Likes: </span><span className="text-primary">{likes}</span></div>
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
