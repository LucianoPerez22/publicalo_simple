import React from 'react';
import logo from './redes-sociales.jpeg';

function Main(props) {
    return (
        <div className="container">
            <div className="row">
                <h2>Bienvenido a Publicalo Simple!</h2>
                <p className="mt-3">Comienza a gestionar las publicaciones de tus redes sociales</p>
            </div>

            <div className="row">
                <img className="img-fluid rounded mx-auto d-block" src={logo} style={{
                    width: '60rem'
                }}/>
            </div>
        </div>
    );
}

export default Main;