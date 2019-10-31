import React from 'react';
import BarNav from "./BarNav";
const Header = () => {
    return (
        <div className="container-padre-header">
        <div className="head">

         <div className= "logo"></div>
          <div className= "clima"></div>
          
        </div>
        <BarNav/>
        </div>
    );
};

export default Header;