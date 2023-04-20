import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between items-center">
                <a className="btn btn-ghost normal-case font-bold text-3xl">Context</a>
                <nav>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/order'>Orders</Link>
                    {
                        user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                    }
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    {
                        user ?
                            <>
                                <span>{user.email}</span>
                                <button onClick={handleLogOut} className="btn btn-error">Sign Out</button>
                            </>
                            :
                            <Link to='/login' className="btn btn-primary">Login</Link>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;