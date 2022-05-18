import React from 'react';
import Logo from '../images/logo.jpg'

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className="logo mt-3 mb-3">
                <img src={Logo} width={100} />
            </div>
            <hr />
        </div>
    )
}
export default Header