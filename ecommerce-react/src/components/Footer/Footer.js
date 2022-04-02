import React from 'react';

// components
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

function Footer(){
    return(
        <footer className="main-footer">
            <div>
                <p>Todos los derechos reservados - WRN 2022 ©</p>
                <Stack direction="row" spacing={5} className='stack-style'>
                    <IconButton aria-label="instagram" className='icon-btn'>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton aria-label="facebook" className='icon-btn'>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="linkedin" className='icon-btn'>
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </div>
        </footer>
    );
}

export default Footer