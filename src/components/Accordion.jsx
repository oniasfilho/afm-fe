import React, { useState } from 'react';

function Accordion(props){

    const [isPessoal , setIsPessoal] = useState(true);

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
        <select className="hidden" id="dispositivoFuncional">
            <option selected>Selecione o dispositivo</option>
            <option value="1">Samsung Galaxy Tantofaz</option>
            <option value="2">iPhone</option>
            <option value="3">Blackberry</option>
        </select>
    );

    function handleRadio(i){
        if(i.target.name === "funcional"){
            setIsPessoal(false);
            document.getElementById("radioPessoal").removeAttribute("checked");
            document.getElementById("radioFuncional").checked = "true"
        } else{
            setIsPessoal(true);
            document.getElementById("radioFuncional").removeAttribute("checked");
            document.getElementById("radioPessoal").checked = "true"
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
                                name="inlineRadioOptions" 
                                id="radioPessoal" 
                                
                            />
                            <label className="form-check-label" htmlFor="radioPessoal">Pessoal</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="funcional" 
                                id="radioFuncional"
                                onChange={handleRadio}
                                
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