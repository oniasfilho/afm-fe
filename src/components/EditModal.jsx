import React, { useContext, useEffect, useState } from 'react';
import {AtualizaContext} from './AtualizaContext';
import AccordionEdit from './AccordionEdit';

function EditModal(){

    const [counter, setCounter, selecionada, setSelecionada, usuario, setUsuario] = useContext(AtualizaContext);

    const handleClick = () => {
    
        setUsuario({
          cpf: "",
          nome: "",
          email: "",
          status: "",
          lotacao: "",
          dispositivoFuncional : null,
          dispositivoPessoal: null
        })
    
        submeteForm();
    };

    const submeteForm = async () => {
        try {
    
          fetch('/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          setUsuario({
            cpf: '',
            nome: '',
            email: '',
            status: '1',
          });
    
          setCounter(counter+1)
        } catch (error) {

        }
    };

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
            <div className="modal fade xl" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputNome">Nome</label>
                                    <input
                                        name="nome"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nome"
                                        onChange={handleChange}
                                        value={selecionada.nome}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputMatricula">CPF</label>
                                    <input
                                        name="cpf"
                                        type="text"
                                        className="form-control"
                                        placeholder="CPF"
                                        onChange={handleChange}
                                        value={selecionada.matricula}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEndereco">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Ex: john.snow@sefaz.mt.gov.br"
                                        onChange={handleChange}
                                        value={selecionada.email}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="lotacao">Lotação</label>
                                    <input
                                        name="lotacao"
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: GSUP"
                                        onChange={handleChange}
                                        value={usuario.lotacao}
                                    />
                                </div>
                            </div>
                            <AccordionEdit/>
                            <br></br>

                            <button className="btn btn-primary" onClick={handleClick}>
                            Cadastrar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default EditModal;
