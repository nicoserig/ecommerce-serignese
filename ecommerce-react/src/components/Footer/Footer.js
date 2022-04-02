import React from 'react'
import Button from '@mui/material/Button'
import './Footer.css'

function Footer(){
    return(
        <footer className="main-footer">
            <ul className = 'footer'>
                <li><Button > Instagram </Button></li>
                <li><Button > Facebook </Button></li>
                <li><Button > Nosotros </Button></li>
                <li><Button > Contacto </Button></li>
            </ul>
        </footer>
    );
}

export default Footer