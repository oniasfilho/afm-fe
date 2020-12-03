import React from 'react';
import {Link} from 'react-router-dom';  

function Nav() {
  

    const navStyle= {
        color: 'white'
    }

  return (
   <nav>

       <div className="linkWrapper">

        
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                <li>   <h3>SUCIT</h3> </li>
                </Link>
                <Link style={navStyle} to='/cadastro'>
                    <li>Cadastro</li>
                </Link>
                <Link style={navStyle} to='/consulta'>
                    <li>Consulta</li>
                </Link>
                    
            </ul>

       </div>
   </nav>
  )
}


export default Nav;
