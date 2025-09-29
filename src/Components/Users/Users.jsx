import React from 'react';
import { useLoaderData } from 'react-router';
import UsersCard from '../UsersCard/UsersCard.JSx';




const Users = () => {

const users = useLoaderData();

console.log(users);
    return (
        <div>
           <h1>This is users</h1> 
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
             {
            users.map(user => <UsersCard key={user.id} user={user}/>)
           }
          </div>
        </div>
    );
};

export default Users;<h1>This is users</h1>