import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-primary text-center my-5'>Successfully Check Out</h1>
            <Button onClick={()=>navigate('/home')} className='d-block mx-auto'>Proceed</Button>
        </div>
    );
};

export default CheckOut;