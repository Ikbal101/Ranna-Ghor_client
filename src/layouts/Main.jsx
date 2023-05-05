import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import {Container } from 'react-bootstrap';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Body from './Body/Body';
import { Outlet } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            
            <NavigationBar/>
            <Container>
                <Body></Body>
          <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;