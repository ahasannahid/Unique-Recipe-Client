import React from 'react';
import { Link } from 'react-router-dom';

const Loginto = () => {
    return (
        <div>
            <Link className='text-center text-primary text-4xl' to='/login'><h1>Please Log In first </h1></Link>
        </div>
    );
};

export default Loginto;