import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Accordion(props){

    const [isPessoal , setIsPessoal] = useState(true);
    const [dispositivosF, setDispositivosF] = useState([
        {dispositivo: 'New York', code: 'NY'},
        {dispositivo: 'Rome', code: 'RM'},
        {dispositivo: 'London', code: 'LDN'},
        {dispositivo: 'Istanbul', code: 'IST'},
        {dispositivo: 'Paris', code: 'PRS'}
    ]);
    const [dispositivo, setDispositivo] = useState({dispositivo: "selecione"})

    const DispositivoPessoal = () => (
        <div className="form-group col-md-6" id="dispositivoPessoal">
            <label htmlFor="modelo">Nome</label>
            <input
                name="nome"
                type="text" 
                className="form-control" 		
                placeholder="ex: Galaxy S20"
                
            />

            <label htmlFor="imei" style={{marginTop: "5px"}}>IMEI</label>
            <input 
                name="imei"
                type="text" 
                className="form-control" 
                placeholder="ex: (000000-00-000000-0)"
                
            />
        </div>
    );



    const DispositivoFuncional = () => (
        
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

        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div className="card">
                <div className="card-header" role="tab" id="headingOne1">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
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

                        <div className="form-check form-check-inline">
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
                            <DispositivoPessoal/>
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