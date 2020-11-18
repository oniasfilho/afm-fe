import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function Consulta() {
  useEffect(() => {
    buscaPessoas();
  }, [])

  const [items, setItems] = useState([]);

  const buscaPessoas = async () =>{
    const dados = await fetch(
      'https://devmentor.live/api/examples/contacts?api_key=b7c58b'
    );

    const items = await dados.json();
    console.log(items);
    setItems(items)
  }
  
  return (
    <div>
        {items.map(item => (
          <h1 key={item.id}>
            <Link to={`/consulta/${item.id}`} > {item.firstName} </Link>
          </h1>

        ))}
    </div>

  )
}

export default Consulta;
