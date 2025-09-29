import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();

    const {name,phone,email,website} = user

   const navigate = useNavigate()


    const handleNaviget = () =>{
        navigate('/users')
    }

    return (
        <div>
            <h3>user details</h3>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{website}</p>

            <button onClick={handleNaviget} className='bg-blue-600 p-3 rounded-xl text-white'>back </button>
        </div>
    );
};

export default UserDetails;