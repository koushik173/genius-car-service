import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword ,user,error] = useCreateUserWithEmailAndPassword(auth);
    const [agree, setAgree] = useState(false)

    const handleSubmit=event=>{
        event.preventDefault();
        const password = event.target.formBasicPassword.value;
        const email = event.target.formBasicEmail.value;
        // const name = event.target.formBasicName.value;
        createUserWithEmailAndPassword(email, password);
        alert("SuccessFully Registered");
    }
    const navigate = useNavigate();
    if(user){
        navigate('/home');
    }

    return (
        <div  className='container w-50 mx-auto mt-4'>
        <h2 className='text-primary'>Please Register!!</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control  type="text" placeholder="Enter your name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" required/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  required/>
            </Form.Group>
            <div class="form-check">
                <input onClick={()=> setAgree(!agree)} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label mb-2" for="exampleCheck1"><p className={`ps-2 ${agree ? '':'text-danger'}`}>Accept Car Genius Terms And Condition</p></label>
            </div>
            <Button 
                disabled={!agree}
                variant="primary"
                type="submit">
                Register
            </Button>
        </Form>
        {
            error && <p>{error.message}</p>
        }
        <p> <br /> Already have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Please Login!!</Link></p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;