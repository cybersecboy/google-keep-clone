import React from 'react';
import mylogo from './images/mylogo.png';
const Header=()=>{
    return(
        <>
            <div className='header'>
                <img src={mylogo} alt='logo' width='70' height='70' />
                <h1>Girraj Keep Notes</h1>
            </div>
        </>
    );
}

export default Header;