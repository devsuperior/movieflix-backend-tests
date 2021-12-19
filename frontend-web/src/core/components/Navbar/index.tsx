import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon';
import './styles.scss';

const Navbar = () => (
    <nav className=" bg-primary main-nav">
        <div className= "navbar-text">
           <h4>MovieFlix</h4>
        </div>   
        <Link to="/" className="nav-btn">
            <ButtonIcon text="SAIR"/>
        </Link> 
    </nav>
);

export default Navbar;