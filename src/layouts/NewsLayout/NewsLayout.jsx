import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';

const NewsLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
               <Outlet/> 
            </Container>
        </div>
    );
};

export default NewsLayout;