import React from 'react';
import {render} from 'react-dom';
import{ Router, Route, Link} from 'react-router-dom';

//Componentes a Enrutar.

import OfertasList from './OfertasList';
import Login from './Login';
import Inicio from './Inicio';
import UsuarioOfertas from './UsuarioOfertas';
import history from 'history'

const browserHistory = history.createBrowserHistory();
/**
 * Rutas del front
 */

//TODO Arreglar el router para que no se solapen los componentes.

Meteor.startup(()=>{
    render(
        <Router history={browserHistory}>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/ofertas" component={OfertasList}/>
            <Route exact path="/uofertas" component={UsuarioOfertas}/>
        </Router>,
        document.getElementById('root')
    );
});
