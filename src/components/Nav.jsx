import React from 'react';
import {Link} from 'react-router-dom';  

function Nav() {
  

    const navStyle= {
        color: 'white'
    }

  return (
   <nav>
        <Link style={navStyle} to='/'>
            <h3>SUCIT</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to='/cadastro'>
                <li>Cadastro</li>
            </Link>
            <Link style={navStyle} to='/consulta'>
                <li>Consulta</li>
            </Link>
                
        </ul>
   </nav>
  )
}


export default Nav;
