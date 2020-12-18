import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cadastro from './components/Cadastro';
import Consulta from './components/Consulta';
import Home from './components/Home';
import DetalhaPessoa from './components/DetalhaUsuario';
import EditModal from './components/EditModal';
import { AtualizaProvider } from './components/AtualizaContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  // const TestaAtualiza = (e) => {
  //   alert('chegou em atualiza');
  // };

  // counter, setCounter, dp, setDp, df, setDf, 
  //           isPersonal , setIsPersonal, usuario, setUsuario, usuarioEdit, setUsuarioEdit

  return (
    <Router>
      <div>
        <Nav />
          <AtualizaProvider>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/consulta" exact component={Consulta} />
                <Route path="/consulta/:id" exact component={DetalhaPessoa} />
              </Switch>
            <EditModal/>
          </AtualizaProvider>
      </div>
    </Router>
  );
}

export default App;
