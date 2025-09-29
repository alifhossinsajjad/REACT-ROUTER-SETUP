import React, { use } from 'react';

const UsersDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    const {name, username} = user
    return (
        <div>
            <p>name : {name}</p>
            <p>UserName : {username}</p>
        </div>
    );
};

export default UsersDetails2;