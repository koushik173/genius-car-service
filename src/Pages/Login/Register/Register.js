import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const password = event.target.formBasicPassword.value;
        const email = event.target.formBasicEmail.value;
        const name = event.target.formBasicName.value;
        console.log(name, email, password);
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
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  required/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        <p> <br /> Already have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Please Login!!</Link></p>
    </div>
    );
};

export default Register;