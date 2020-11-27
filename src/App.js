import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cadastro from './components/Cadastro'
import Consulta from './components/Consulta';
import DetalhaPessoa from './components/DetalhaUsuario';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';





function App() {
  
  return (
    <Router> 
      <div>
        <Nav />
        <Switch>  
          <Route path="/" exact component={Home} />
          <Route path="/cadastro" exact component={Cadastro} />
          <Route path="/consulta" exact component={Consulta} />
          <Route path="/consulta/:id" exact component={DetalhaPessoa} />
        </Switch>
      </div>
    </Router>

  )
}


const Home = ()=> (
  <div>
      <h1>Home Page</h1>
  </div>
)

export default App;
