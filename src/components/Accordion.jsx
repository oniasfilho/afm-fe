import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Accordion(props){

    const [isPessoal , setIsPessoal] = useState(true);
    const [dispositivosF, setDispositivosF] = useState([]);
    const [dispositivoSelecionado] = useState({
        id: "",
        numero: "",
        imei: "",
        tipo: "",
        status: "",
        nick: ""
    });

    useEffect(() => {
        buscaDispositivos();
    },[])

    const buscaDispositivos = async () =>{
        const dados = await fetch (
            '/api/dispositivofuncional'
        );

        const dispositivos = await dados.json();
        setDispositivosF(dispositivos);
    }


    const DispositivoFuncional = () => (
        <div className="form-group col-md-2">
            <select 
                className="custom-select mr-sm-2" 
                id="inlineFormCustomSelect"
                value={dispositivoSelecionado}
                name="dispositivoF"
                onChange={(e) => props.id(e.target.value)}
            >
                <option defaultValue>Escolher</option>

                {dispositivosF.map(dispositivo =>(
                    <option key={dispositivo.id} 
                        value={dispositivo.id}
                    > 
                        {dispositivo.nick}
                    </option>
                ))}

            </select>
        </div>
    );

    function handleRadio(e){
        const clicado = e.target;
        if(clicado.name === "pessoal"){
            document.getElementById("radioFuncional").checked= false;
            setIsPessoal(true);
        } else{
            setIsPessoal(false);
            document.getElementById("radioPessoal").checked= false;
        }
    }

    return(

        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true" >
            <div className="card">
                <div className="card-header" role="tab" id="headingOne1">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="false"
                        aria-controls="collapseOne1">
                        Adicionar Dispositivo
                    </a>
                </div>
                <div id="collapseOne1" className="collapse hide" role="tabpanel" aria-labelledby="headingOne1"
                    data-parent="#accordionEx">
                    <div className="card-body">
                        <div className="form-check form-check-inline estiloRadio" >
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="pessoal" 
                                id="radioPessoal" 
                                onClick={handleRadio}
                                defaultChecked
                            />
                            <label className="form-check-label" htmlFor="radioPessoal">Pessoal</label>
                        </div>

                        <div className="form-check form-check-inline" style={{"padding":"10px"}} >
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="funcional" 
                                id="radioFuncional"
                                onClick={handleRadio}
                            />
                            <label className="form-check-label" htmlFor="radioFuncional">Funcional</label>
                        </div>

                        <div className="form-row">
                        {isPessoal?
                           <div className="form-group col-md-6" id="dispositivoPessoal">
                           <label htmlFor="modelo">Nome</label>
                           <input
                               name="nick"
                               type="text" 
                               className="form-control" 		
                               placeholder="ex: iPhone 12"
                            //    onChange={handleChange}
                           />
                           <label htmlFor="modelo">Numero</label>
                           <input
                               name="numero"
                               type="text" 
                               className="form-control" 		
                               placeholder="ex: (XX)9XXXX-XXXX"
                            //    onChange={handleChange}
                           />
               
                           <label htmlFor="imei" style={{marginTop: "5px"}}>IMEI</label>
                           <input
                               name="imei"
                               type="text" 
                               className="form-control" 
                               placeholder="ex: (000000-00-000000-0)"
                            //    onChange={handleChange}
                           />
                       </div>
                            : <DispositivoFuncional/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Accordion;