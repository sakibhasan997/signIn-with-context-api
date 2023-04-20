import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <h2>THis is Home </h2>
        </div>
    );
};

export default Home;




// shortcut
/**
 *  {user && <span>{user.displayName}</span> }
* **/