import './App.css';
import Landing from './components/Landing/Landing.js';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Form from './components/Form/Form.js';
import Detalle from './components/Detalle/Detalle.js';
import Buscador from './components/Buscador/Buscador.js';


function App() {
  return (
    <div className="App">

      <Route exact path='/' component={Landing} /> 
      {/* <h1>Henry Videogames</h1> */}
      <Route exact path='/home' component={Home} /> 
      <Route exact path='/form' component={Form} />
      <Route exact path='/search' component={Buscador} />
      <Route exact path='/game/:id' component={Detalle} />
     
    </div>
  );
}

export default App;
