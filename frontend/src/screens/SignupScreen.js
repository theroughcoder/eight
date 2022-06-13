import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';

export default function SignupScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [name, setFullName] = useState(" ")
    const [confirmPassword, setConfirmPassword] = useState(" ")

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {userInfo} = state;

    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl? redirectInUrl : '/';

    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/users/signup', {
                name,
                email,
                password,
                confirmPassword
            });
            ctxDispatch({type: "USER_SIGNUP", payload: data})
            navigate(redirect);
        }catch(err){
            toast.error(getError(err))
        }
    }
    useEffect(() =>{
        if(userInfo){
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo])
  return (
    <Container className="small-container">
    <Helmet>
        <title>Sign Up</title>
    </Helmet>
    
    <h1 className="heading">Sign Up</h1>
    <Form className='sign-form' onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={(e)=>{setFullName(e.target.value)}} type="text" required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e)=>{ setEmail(e.target.value)}} type="email" required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" required></Form.Control>
        </Form.Group>
        <div className="md-3">
            <Button variant="secondary" type="submit">Sign Up</Button>
        </div>

    </Form>
</Container>
  )
}
