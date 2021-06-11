import React from 'react';
import Navlink from './Navlink';
const  Navigation= () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Navlink to="/">Home</Navlink>
                </li>
                <li>
                <Navlink to="/contact">Contact</Navlink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;