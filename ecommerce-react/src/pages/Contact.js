import { TextField, Container } from '@mui/material';
import React from 'react'
import './Contact.css'

function ContactPage(){
    return (
        <Container maxWidth='xl'>
            <div className='form-container'>
                <div className='form-content-right'>
                    <form className='form' noValidate>
                        <h1>
                        Completá nuestro formulario para recibir más información acerca de nuestros productos.
                        </h1>
                        <div className='form-inputs'>
                        <label className='form-label'>Nombre</label>
                        <input
                            className='form-input'
                            type='text'
                            name='name'
                            placeholder='Ingresá tu nombre'
                        />
                        </div>
                        <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Ingresá tu email'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label className='form-label'>Celular</label>
                            <input
                                className='form-input'
                                type='number'
                                name='celular'
                                placeholder='Ingresá tu celular'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label className='form-label'>Mensaje</label>
                            <input
                                className='form-input'
                                type='text'
                                name='mensaje'
                                placeholder='Ingresá tu mensaje'
                            />
                        </div>
                        <button className='form-input-btn' type='submit'>
                        Enviar
                        </button>
                    </form>
                </div>
            </div>
        </Container>
      );
    };

export default ContactPage;