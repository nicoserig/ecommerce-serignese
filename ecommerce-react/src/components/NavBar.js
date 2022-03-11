import React from 'react'
import Button from '@mui/material/Button'
import './NavBar.css'

function NavBar(){
    return(
        <header className="main-header">
            <ul className = {'navbar'}>
                <li><Button>Inicio</Button></li>
                <li><Button>Productos</Button></li>
                <li><Button>Nosotros</Button></li>
                <li><Button>Contacto</Button></li>
            </ul>
        </header>
    );
}

export default NavBar