import React from 'react'
import Button from '@mui/material/Button'
import './NavBar.css'
import Logo from './logo/logonb3.png'
import LogoWRN from './logo/logowrn.png'
import { Home, Category, Info, AlternateEmail } from '@mui/icons-material';

function NavBar(){
    return(
        <header className="main-header">
            <img src={Logo} className={'navbar-logo'} alt='logo'/>
            <img src={LogoWRN} className={'navbar-logo-wrn'} alt='logo wrn'/>
            <ul className = {'navbar'}>
                <li><Button startIcon={<Home/>}>Home</Button></li>
                <li><Button startIcon={<Category/>}>Productos</Button></li>
                <li><Button startIcon={<Info/>}>Nosotros</Button></li>
                <li><Button startIcon={<AlternateEmail/>}>Contacto</Button></li>
            </ul>
        </header>
    );
}

export default NavBar