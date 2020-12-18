import React, { useState, createContext } from 'react';

export const AtualizaContext = createContext();

export const AtualizaProvider = (props) => {

    const [usuario, setUsuario] = useState({
        cpf: "",
        nome: "",
        email: "",
        status: "",
        lotacao: "",
        dispositivoFuncional : null,
        dispositivoPessoal: null
      });

    const [selecionada, setSelecionada] = useState({
        cpf: "",
        nome: "",
        email: "",
        status: "",
        lotacao: "",
        dispositivoFuncional : null,
        dispositivoPessoal: null
      });

    const [counter, setCounter] = useState(0);

    const [dp, setDp] = useState({
        id: "",
        numero: "",
        imei: "",
        status: "",
        nick: ""
    });

    const [df, setDf] = useState({
        id: "",
        numero: "",
        imei: "",
        status: "",
        nick: ""
    });

    const [isPersonal , setIsPersonal] = useState(true);

    

    return (
        <AtualizaContext.Provider value={[counter, setCounter, dp, setDp, df, setDf, 
            isPersonal , setIsPersonal, usuario, setUsuario, selecionada, setSelecionada]}>
            {props.children}
        </AtualizaContext.Provider>
    );
}