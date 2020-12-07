import React, { useContext, useEffect, useState } from 'react';
import {AtualizaContext} from './AtualizaContext';

function EditModal(props){

    const [usuario, setUsuario] = useState(
        {
            id:"",
            cpf: "",
            nome: "",
            email: "",
            lotacao:"",
            status: "1"
        }
    );

    const [counter, setCounter] = useContext(AtualizaContext);

    useEffect(() => {
       setUsuario(props.target)
    },[props]);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUsuario(oldVal =>{
            return(
                {
                    ...oldVal,
                    [name]: value
                }
            )
        })
    }

     const atualizaUser = () => {
        try {
            fetch('/api/usuarios', {
                method: 'PUT',
                body: JSON.stringify(usuario),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSave = (e) =>{
        e.preventDefault();
        atualizaUser();
        setCounter(counter+1);

    }
    

    return(
        <div id="editUsuarioModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Alterar Usuário</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">					
                            <div class="form-group">
                                <label>Nome</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={handleChange}
                                    value={usuario.nome} 
                                    name="nome"
                                    required
                                />
                            </div>

                            <div class="form-group">
                                <label>CPF</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={handleChange}
                                    value={usuario.cpf}
                                    name="cpf" 
                                    required
                                />
                            </div>
                            
                            <div class="form-group">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={handleChange}
                                    value={usuario.email} 
                                    name="email"
                                    required
                                />              
                            </div>

                            <div class="form-group">
                                <label>Lotação</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={handleChange}
                                    value={usuario.lotacao}
                                    name="lotacao" 
                                    
                                />
                            </div>					
                        </div>
                        <div class="modal-footer">
                            <input 
                                type="button" 
                                class="btn btn-default" 
                                data-dismiss="modal" 
                                value="Cancelar"
                            />
                            <button 
                                className="btn btn-primary" 
                                onClick={(e) => handleSave(e)}
                                data-dismiss="modal" 
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditModal;