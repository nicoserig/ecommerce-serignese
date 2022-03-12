import React from 'react'
import Button from '@mui/material/Button'
import './NavBar.css'
import Logo from './logo/logonb3.png'
import { Home, Category, Info, AlternateEmail} from '@mui/icons-material';

function NavBar(){
    return(
        <header className="main-header">
            <img src={Logo} className={'navbar-logo'} alt='logo'/>
            <ul className = {'navbar'}>
                <li><Button><Home className={'li-btn-icon'} fontSize="small"/>Home</Button></li>
                <li><Button><Category className={'li-btn-icon'} fontSize="small"/>Productos</Button></li>
                <li><Button><Info className={'li-btn-icon'} fontSize="small"/>Nosotros</Button></li>
                <li><Button><AlternateEmail className={'li-btn-icon'} fontSize="small"/>Contacto</Button></li>
            </ul>
        </header>
    );
}

export default NavBar