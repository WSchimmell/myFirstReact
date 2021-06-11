import React from 'react';
import { Link } from "@reach/router";

const Navlink = props => (
     <Link 
     {...props}
        getProps={({ isCurrent }) => {
            return {
                style: {
                    color: isCurrent ? "orange" : "purple",
                }
            };
        }}
        />
     );

 
export default Navlink;