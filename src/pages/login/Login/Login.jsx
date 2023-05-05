import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase/firebase.config';



const Login = () => {
    const [user,SetUser]=useState();
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const loggedInUser =result.user
            console.log(loggedInUser);
            SetUser(loggedInUser)
        })
        .catch(error =>{
            console.log('error',error.message)
        })
    }
    const handleSignOut = ( )=>{
        signOut(auth)
        .then(result =>{
            SetUser(null)
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGItHUbSignIn = () =>{
        signInWithPopup(auth,gitHubProvider)
        .then(result =>{
            const loggedInUser =result.user
            console.log("this is git",loggedInUser);
            SetUser(loggedInUser)

        })
        .catch(error =>{
            console.log('github error',error.message)
        })  
    }


    const {signIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/category/0';

const handleLogIn =event => {
    event.preventDefault();
    const form = event.target;
    const password =form .password.value ;
    const email =form.email.value ;
    console.log(email,password);

    signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <div>

        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login 
                </Button> <br />


               

                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link style={{textDecoration:"none",color:"red"}} to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>

        <div className='text-center mt-4'>
        { user?
            <button onClick={handleSignOut}>Log Out</button>:
                <>
                    <button className='btn btn-warning' onClick={handleGoogleSignIn}>Google Login</button>
                    <button className='btn btn-secondary' onClick={handleGItHUbSignIn}>GIthub login</button>
                </>
            }
           
        </div>
      
        </div>

        
    );
    };

export default Login;