import React from 'react';
// importation des components
import Connexion from './Connexion';
import Footer from './Footer';
import Header from './Header';
import Inscription from './Inscription';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function pageNotFound() {
  return (
    <div>
      <h2> Page not Found...</h2>
    </div>
  )};


function App() {
  return (
    <div className="App">
   <Router>
        <Route exact path="/Header" component={Header}/>
        <Switch>
        {/* la premiere route ne doit pas voir de Npoint */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/connexion" component={Connexion}/>
        <Route exact path="/inscription" component={Inscription}/>
        <Route exact component = {pageNotFound}/>
        </Switch>
        <Route exact path="/footer" component={Footer}/>
   </Router>
    </div>
  );
}

export default App;
