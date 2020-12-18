import React, { useContext, useEffect, useState } from 'react';
import {AtualizaContext} from './AtualizaContext';

function EditModal(){

    ''
    const [counter, setCounter, selecionada, setSelecionada] = useContext(AtualizaContext);

     const atualizaUser = () => {
        try {
            fetch('/api/usuarios', {
                method: 'PUT',
                body: JSON.stringify(selecionada),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSave = () =>{
        atualizaUser();
        setCounter(counter+1);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setSelecionada(oldVal =>{
            return(
                {...oldVal, 
                 [name] : value}
            );
        })
    }
    
    return(

        <div> 
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form>
                             <div className="form-group">
                             <label>Nome</label>
                                 <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={handleChange}
                                    value={selecionada.nome} 
                                    name="nome"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>CPF</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={handleChange}
                                    value={selecionada.cpf} 
                                    name="cpf" 
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={handleChange}
                                    value={selecionada.email} 
                                    name="email"
                                    required
                                />              
                            </div>

                            <div className="form-group">
                                <label>Lotação</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={handleChange}
                                    value={selecionada.lotacao} 
                                    name="lotacao" 
                                />
                            </div>					
                    </form>
              </div>
              <div className="modal-footer">
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                
                <button 
                    type="button" 
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleSave}
                >
                    Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>

    );
}

export default EditModal;