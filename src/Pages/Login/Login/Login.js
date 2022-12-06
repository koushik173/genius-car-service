import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword,user,error] =useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    if(user){
        navigate(from,{replace: true});
    }
    const handleSubmit=event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    const forgetPassword=async()=>{
        await sendPasswordResetEmail(emailRef.current.value);
        alert('Sent email');
    }
    
    return (
        <div  className='container w-50 mx-auto mt-4'>
            <h2 className='text-primary'>Please Login!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            {
                error && <span>{error.message}</span>
            }
            <br /><p> Forget Password ? <Link onClick={forgetPassword} className='text-primary text-decoration-none'>Reset Password!!</Link></p>
            <p> New to Genius car ? <Link to="/register" className='text-primary text-decoration-none'>Please register!!</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;