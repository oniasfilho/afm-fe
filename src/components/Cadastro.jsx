import React from 'react';
import Accordion from './Accordion'


function Cadastro() {
  
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
                // onChange={handleChange}
                // value={pessoa.nome}
                />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="inputMatricula">Matrícula</label>
              <input 
                name="matricula"
                type="text" 
                className="form-control" 
                placeholder="Matrícula"
                // onChange={handleChange}
                // value={pessoa.matricula}
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
                // onChange={handleChange}
                // value={pessoa.email}
                />							
            </div>

            <div className="form-group col-md-6">
              
              <label htmlFor="lotacao">Lotação</label>
              <input 
                name="lotacao"
                type="text" 
                className="form-control" 
                placeholder="Ex: GSUP"
                // onChange={handleChange}
                // value={pessoa.lotacao}
                />
            </div>
          </div>
          <Accordion/>
          <br></br>

          <button 
            className="btn btn-primary" 
            // onClick={handleClick}
          >  
            Cadastrar
          </button>
            
        </div>
      </div>        
    </div>
  )
}

export default Cadastro;
