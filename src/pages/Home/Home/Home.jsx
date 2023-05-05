import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allChefDetails = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <h2>This is Home:{allChefDetails.length}</h2>


        </div>
    ) ;
};

export default Home;