import React, { useState, createContext } from 'react';

export const AtualizaContext = createContext();

export const AtualizaProvider = (props) => {

    const [counter, setCounter] = useState(0);

    return (
        <AtualizaContext.Provider value={[counter,setCounter]}>
            {props.children}
        </AtualizaContext.Provider>
    );
}