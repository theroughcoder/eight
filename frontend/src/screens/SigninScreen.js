import { Axios } from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Store } from '../Store';
import { getError } from '../utils';

export default function SigninScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {userInfo} = state;

    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl? redirectInUrl : '/';

    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            const {data} = await Axios.post('/api/users/signin', {
                email,
                password
            });
            ctxDispatch({type: "USER_SIGNIN", payload: data})
            navigate(redirect)
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
        <title>Sign In</title>
    </Helmet>
    
    <h1 className="heading">Sign In</h1>
    <Form className='sign-form' onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e)=>{ setEmail(e.target.value)}} type="email" required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" required></Form.Control>
        </Form.Group>
        <div className="md-3">
            <Button variant='secondary' type="submit">Sign In</Button>
        </div>
        <div style={{paddingTop: "15px"}} className="md-3">
         New customer?{' '}
         <Link to ={`/signup?redirect=${redirect}`}> Create your account</Link>

        </div>

    </Form>

    </Container>
  )
}
