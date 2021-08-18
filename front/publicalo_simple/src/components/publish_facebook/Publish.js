import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Publish() {
    return (
        <div className="container">
             <div>
                <Header />
            </div >
            <div className="card d-flex justify-content-center mx-auto d-block" style={{maxWidth:'40rem'}}>
                <div className="mb-3" >
                    <label for="exampleFormControlTextarea1" className="form-label">Redacte su Post</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mt-3">
                    <label for="formFile" claclassNamess="form-label">Escoja una imagen</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-primary mt-3">Publicar</button>
                </div>
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