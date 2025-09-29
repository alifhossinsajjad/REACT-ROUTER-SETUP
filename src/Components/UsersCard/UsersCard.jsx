import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UsersDetails2 from '../UsersDEtails2/UsersDetails2';

const UsersCard = ({ user }) => {

    const [showInfo, setInfo] = useState(false)
    const [visitHome, setVisitHome] = useState(false);

    const {id, name, eamil, phone, website
    } = user


    if(visitHome){
        return<Navigate to={'/'}/>
    }


    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    return (
        <div className='border rounded-xl p-4 mb-4'>
            <div >
                <h2>name : {name}</h2>
                <p>email : {eamil}</p>
                <p>Phone : {phone}</p>
                <p>Website : {website}</p>
                <Link to={`/users/${id}`}>Show Details</Link>

                <button onClick={()=> {setInfo(!showInfo)}} className='bg-red-600 p-2 mt-4 rounded-xl text-white ml-4'>{showInfo ? 'Hide' : 'Show'} info</button>
                {
                    showInfo && <Suspense fallback={<span>Loading....</span>}>
                        <UsersDetails2 userPromise={userPromise}/>
                    </Suspense>
                }


                <button onClick={() => {setVisitHome(true)}} className='bg-amber-600 p-3 rounded-xl'>Visit Home</button>
            </div>
        </div>
    );
};

export default UsersCard;