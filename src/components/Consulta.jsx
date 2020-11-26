import React, {useState, useEffect} from 'react';


function Consulta() {
  useEffect(() => {
    buscaPessoas();
  }, [])

  const [items, setItems] = useState([
    {
      "id": "",
      "cpf": "",
      "nome": "",
      "email": "",
      "dataDeCriacao": null,
      "ultimaAtualizacao": null,
      "status": null,
      "dispositivos": []
    }
  ]);

  const buscaPessoas = async () =>{
    const dados = await fetch(
      '/api/usuarios'
    );

    const items = await dados.json();
    console.log(items);
    setItems(items)
  }
  
  return (
    <div className="container-xl">
			<div className="table-responsive">
				<div className="table-wrapper">
					<div className="table-title">
						<div className="row">
							<div className="col-sm-6">
								<h2>Consulta de <b>Usuarios</b></h2>
							</div>
						</div>
					</div>
					<table className="table table-striped table-hover">
						<thead>
							<tr>
								<th style={{width: "20%"}}>Nome</th>
								<th>Email</th>
								<th>Data de Cadastro</th>
								<th>Ultima Atualizacao</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>

              {items.map((pessoa) => {
                return(
                <tr key={pessoa.id}>
                  <td>{pessoa.nome}</td>
                  <td>{pessoa.email}</td>
                  <td>{pessoa.dataDeCriacao}</td>
                  <td>{pessoa.ultimaAtualizacao}</td>
                  <td>
                    <a href="#editUsuarioModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#deleteUsuarioModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                  </td>
							</tr> 
              )  
            })}
						</tbody>
					</table>
				</div>
			</div>        
		</div>

  )
}

export default Consulta;
