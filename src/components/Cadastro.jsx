import React, { useState } from 'react';
import Accordion from './Accordion';

function Cadastro() {

  const [usuario, setUsuario] = useState({
      cpf: "sssss",
      nome: "",
      email: "",
      status: "1"
    });

    const [dispositivoSelecionado, setDispositivoSelecionado] = useState({
      nick: "",
      numero: "",
      imei: "",
      tipo: "",
      status: "1"
  });

  const submeteForm = async () =>{
      fetch('/api/usuarios', {
      method: 'POST',
      body:usuario,
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }


    const handleDispInfo = (e) =>{
      const {name, value} = e.target;
      setDispositivoSelecionado(oldVal =>{
        return(
          {...oldVal, [name]:[value]}
        )
      })
    }

    const handleChange = (e) =>{
      const {name, value} = e.target;
      console.log(name, value);
      setUsuario(oldVal =>{
        return(
          { 
            ...oldVal,
            [name]:[value]
          }
        )
      })
    }

    const handleClick = () =>{
      submeteForm();
    }


  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Cadastrar <b>Usuário</b></h2>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputNome">Nome</label>
              <input
                name="nome"
                type="text" 
                className="form-control" 												 
                placeholder="Nome"
                onChange={handleChange}
                value={usuario.nome}
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
                value={usuario.matricula}
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
                value={usuario.email}
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
          <Accordion infoDisp={handleDispInfo} dispositivoSelecionado={dispositivoSelecionado}/>
          <br></br>

          <button 
            className="btn btn-primary" 
            onClick={handleClick}
          >  
            Cadastrar
          </button>
            
        </div>
      </div>        
    </div>
  )
}

export default Cadastro;
