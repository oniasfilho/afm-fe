import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function Consulta() {
  useEffect(() => {
    buscaPessoa();
  }, [])

  const [item, setItem] = useState({});

  const buscaPessoa = async () =>{}; 
  
  return (
    <div>
        <h1>Pessoa</h1>
    </div>

  )
}

export default Consulta;
