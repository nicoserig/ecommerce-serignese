import React from 'react'
import Button from '@mui/material/Button'
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'
import Logo from './logo/logonb3.png'
import LogoWRN from './logo/logowrn.png'
import { Home, Category, Info, AlternateEmail } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NavBar({inCart}){
    return(
        <header className="main-header">
            <img src={Logo} className={'navbar-logo'} alt='logo'/>
            <img src={LogoWRN} className={'navbar-logo-wrn'} alt='logo wrn'/>
            <ul className = {'navbar'}>
                <li><Button startIcon={<Home/>}>
                        <Link to={'/'}>Home</Link>
                    </Button></li>
                <li><Button startIcon={<Category/>}>
                        <Link to={'/productos'}>Productos</Link>
                    </Button></li>
                <li><Button startIcon={<Info/>}>Nosotros</Button></li>
                <li><Button startIcon={<AlternateEmail/>}>Contacto</Button></li>
                <li><CartWidget inCart={inCart}/></li>
            </ul>
        </header>
    );
}

export default NavBar