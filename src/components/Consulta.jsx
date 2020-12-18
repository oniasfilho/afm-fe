import React, { useState, useEffect, useContext } from 'react';
import {AtualizaContext} from './AtualizaContext';


function Consulta() {
  const [pessoas, setpessoas] = useState([
    {
      id: '',
      cpf: '',
      nome: '',
      email: '',
      dataDeCriacao: null,
      ultimaAtualizacao: null,
      status: null,
      dispositivos: [],
    },
  ]);
  

  const [counter, setCounter,selecionada, setSelecionada] = useContext(AtualizaContext);

  useEffect(() => {
    buscaPessoas();
  }, []);

  useEffect(() => {
    buscaPessoas();
  }, [counter]);

  const buscaPessoas = async () => {
    const dados = await fetch('/api/usuarios');

    const pessoas = await dados.json();
    setpessoas(pessoas);
  };

  async function deletaPessoa(e) {
    try {
      fetch(`/api/usuarios/${e}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setCounter(counter+1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Consulta de <b>Usuarios</b>
                </h2>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Nome</th>
                <th>Email</th>
                <th>Data de Cadastro</th>
                <th>Ultima Atualizacao</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pessoas.map((pessoa) => {
                return (
                  <tr key={pessoa.id}>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.email}</td>
                    <td>{pessoa.dataDeCriacao}</td>
                    <td>{pessoa.ultimaAtualizacao}</td>
                    <td>
                      <a
                        href="#"
                        data-bs-target="#exampleModal"
                        className="edit"
                        data-bs-toggle="modal" 
                        onClick={() => setSelecionada(pessoa)}
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >

                          
                          &#xE254;
                        </i>
                      </a>
                      
                      <a
                        href="#deleteUsuarioModal"
                        className="delete"
                        data-toggle="modal"
                        onClick={() => {
                          deletaPessoa(pessoa.id)
                          
                        }}
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
         
        </div>
      </div>

      
    </div>
  );
}

export default Consulta;
