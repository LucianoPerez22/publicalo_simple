import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import logo from './redes-sociales.jpeg';

function Main() {
    return (
        <div className="container">
            <div>
                <Header />
            </div>
            <div className="row">
                <h2>Bienvenido a Publicalo Simple!</h2>
                <p className="mt-3">Comienza a gestionar las publicaciones de tus redes sociales</p>
            </div>

            <div className="row">
                <img className="img-fluid rounded mx-auto d-block" src={logo} style={{
                    width: '30rem'
                }}/>
            </div>
            <div style={{
                position: 'absolute',
                bottom: '0',
                width: '80%'
            }}>
                <Footer />
            </div>
        </div>
    );
}

export default Main;