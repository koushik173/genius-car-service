import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
// import auth 
const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const handleCheckOut=event=>{
        navigate('/checkout')
    }
    return (
        <div>
            <h2>welcome to details: {serviceId}</h2>
            <Button onClick={handleCheckOut} className='btn btn-primary d-block mx-auto mt-5'> Check Out</Button>
        </div>
    );
};

export default ServiceDetail;