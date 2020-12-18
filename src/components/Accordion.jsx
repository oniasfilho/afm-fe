import React, { useEffect, useState, useContext } from 'react';
import {AtualizaContext} from './AtualizaContext';


import 'bootstrap/dist/css/bootstrap.min.css';

function Accordion(){

    const [dispositivosF, setDispositivosF] = useState([{
        id: "",
        numero: "",
        imei: "",
        status: "",
        nick: ""
    }]);

    const [dispFuncionalSelecionado, setDispoFuncionalSelecionado] = useState({
        id: "",
        numero: "",
        imei: "",
        status: "",
        nick: ""
    });

    const [dispPessoal, setDispPessoal] = useState( {
            id: "",
            numero: "",
            imei: "",
            status: "",
            nick: ""
        })

    const [counter, setCounter, dp, setDp, df, setDf, isPersonal , setIsPersonal,usuario, setUsuario] = useContext(AtualizaContext);


    
    useEffect(() =>{
        setDispPessoal({
            id: "",
            numero: "",
            imei: "",
            status: "",
            nick: ""
        })
    }, [counter])


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

    const handleDFSelect = (e) => {
        let disp;

        dispositivosF.map(item =>{
            if (item.id == e){
                disp = item
            }
        })

        setDispoFuncionalSelecionado(disp);
        setUsuario(oldVal =>{
            return(
                {...oldVal,
                 dispositivoFuncional:{
                    id: disp.id,
                    numero: disp.numero,
                    imei: disp.imei,
                    status: disp.status,
                    nick: disp.nick
                     
                 }   }
            );
        }); 
    }


    const DispositivoFuncional = () => (
        <div className="form-group col-md-6">
            <select 
                className="custom-select mr-sm-2" 
                id="inlineFormCustomSelect"
                value={dispFuncionalSelecionado.id}
                name="dispositivosF"
                onChange={(e) => handleDFSelect(e.target.value)}
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
            setIsPersonal(true);
            setUsuario(oldVal=>{
                return(
                    {...oldVal,
                    dispositivoFuncional:null}
                );
            })
        } else{
            setIsPersonal(false);
            document.getElementById("radioPessoal").checked= false;
            setUsuario(oldVal=>{
                return(
                    {...oldVal,
                    dispositivoPessoal:null}
                );
            })
        }
    }

    const handleDPChange = (e) =>{
        const {name, value} = e.target;
        setUsuario(oldVal =>{
            return( {...oldVal , 
                     dispositivoPessoal:{
                        ...oldVal.dispositivoPessoal,
                        [name]: value
                     }} );
        })

        setDispPessoal(oldVal =>{
            return( 
                    {...oldVal,
                        [name]: value
                     } 
                );
        })
    }

    return(


        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Cadastrar Dispositivo
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
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
                        {isPersonal?
                           <div className="form-group col-md-6" id="dispositivoPessoal">
                           <label htmlFor="modelo">Nick</label>
                           <input
                               name="nick"
                               type="text" 
                               className="form-control" 		
                               placeholder="Galaxy Note 20 Ultra 5G"
                               value={dispPessoal.nick}
                               onChange={(e) => handleDPChange(e) }
                               
                           />
                           <label htmlFor="modelo">Numero</label>
                           <input
                               name="numero"
                               type="text" 
                               className="form-control" 		
                               placeholder="ex: (XX)9XXXX-XXXX"
                               value={dispPessoal.numero}

                               onChange={(e) => handleDPChange(e) }
                           />
               
                           <label htmlFor="imei" style={{marginTop: "5px"}}>IMEI</label>
                           <input
                               name="imei"
                               type="text" 
                               className="form-control" 
                               placeholder="ex: (000000-00-000000-0)"
                               value={dispPessoal.imei}
                               onChange={(e) => handleDPChange(e) }
                           />
                            <br></br>
                          
                       </div>
                            : <DispositivoFuncional/>
                            }
                        </div>
                    </div>
                </div>
                </div>
            </div>
           
        </div>
    
    );

    

}

export default Accordion;