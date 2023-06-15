import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import { useLoaderData, useParams } from "react-router-dom";
import Body from "../Body/Body";

const Chefs = () => {
  const { id } = useParams();
  const chefNews = useLoaderData();
  console.log(chefNews);

  // const [chefs, setChefs] = useState([]);

  // useEffect(() => {
  //     fetch(" https://b7a10-chef-recipe-hunter-server-side-webabdulla.vercel.app/categories")
  //         .then((res) => res.json())
  //         .then((data) => setChefs(data))
  //         .catch((error) => console.log(error));
  // }, []);
  // return (
  //     <div>
  //         <h2 className="mt-3">Chef section </h2>
  //         <div className="ourChef">
  //             {chefs.map((chef) => (
  //                 <Chef key={chef.id} chef={chef}></Chef>
  //             ))}
  //         </div>
  //     </div>
  // );

  return (
    <div>
      <h2 className="mt-5  text-center text-warning">---Our Special chefs: {chefNews.length} ---</h2>
      <hr className='w-25  mx-auto' />
      <div className="ourChef">
        {chefNews.map((chef) => (
          <Chef key={chef._id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
