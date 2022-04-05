import React from 'react'
import Button from '@mui/material/Button'
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'
import Logo from './logo/logonb3.png'
import { Link } from 'react-router-dom';

function NavBar({inCart}){
    return(
        <header className="main-header">
            <Link to={'/'}>
                <img src={Logo} className={'navbar-logo'} alt='logo'/>
            </Link>
            <ul className = {'navbar'}>
                <li><Button >
                        <Link to={'/'}>Home</Link>
                    </Button></li>
                <li><Button >
                        <Link to={'/category/productos'}>Productos</Link>
                    </Button></li>
                <li><Button >Nosotros</Button></li>
                <li><Button >
                    <Link to={'/category/contacto'}>Contacto</Link>
                </Button></li>
                <li><CartWidget inCart={inCart}/></li>
            </ul>
        </header>
    );
}

export default NavBar