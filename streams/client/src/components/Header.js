import React from 'react';
import {Link} from "react-router-dom";

import GoogleAuth from './GoogleAuth';

const Header = ()=>{

    return (
        <div className="ui secondary pointing menu">

            <Link to="/" className="item">Streams</Link>

            <div className="menu right">
                <Link to="/" className="item">all Streams</Link>
            </div>
            <GoogleAuth/>

        </div>
    );
};

export default Header;