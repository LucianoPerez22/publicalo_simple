import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Publish() {
    const [file, setFile] = useState("");
    const [mensaje, setMensaje] = useState("");

    const BACKEND = 'http://192.168.0.109'

    const sendDatos = (e) => {
        e.preventDefault()

        const data = new FormData();
        data.append('mensaje', mensaje);
        data.append('foto', file);
        
        fetch(`http://localhost/facebook/prueba.php`, {
            method: "POST",
            body: data
        })
        .then(response=>{

            if (response.status==200){
                
                console.log("se envio exitosamente")
                
            }
        })
        
        console.log("MANDE EL FORMULARIO")

    }
    
    return (
        <div className="container">
             <div>
                <Header />
            </div >
            <div className="card d-flex justify-content-center mx-auto d-block" style={{maxWidth:'40rem'}}>
                <form onSubmit={sendDatos}>
                    <div className="mb-3" >
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Redacte su Post</label>
                        <textarea className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            onChange={(e) => setMensaje(e.target.value)} 
                            name="mensaje"
                            value={mensaje}
                            ></textarea>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="formFile" className="form-label">Escoja una imagen</label>
                        <input className="form-control" 
                            type="file" 
                            accept="image/*"
                            id="formFile" 
                            onChange={(e) => setFile(e.target.value)} 
                            name="file"
                            value={file}
                        />
                    </div>
                    
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary mt-3">Publicar</button>
                    </div>
                </form>
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

export default Publish;