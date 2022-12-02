import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name, img, description, price} = service;
    const navigate = useNavigate();
    
    const navigateToServiceId=id=>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>            
            <img className='w-100' src={img} alt="" />
            <p>{name}</p>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceId(id)} className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};
export default Service;
