import React, { useEffect, useState, useContext } from 'react';
import {AtualizaContext} from './AtualizaContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Accordion(){


    const [counter, setCounter,selecionada, setSelecionada] = useContext(AtualizaContext);
    const [isPessoal, setIsPessoal] = useState(false);
   

    return(
        <div className="accordion" id="accordionExample">

            
            {isPessoal?
            <h1> Usuario tem DP</h1>:
            <h1> Usuario tem DF</h1>
            }


        </div>
    );
}

export default Accordion;