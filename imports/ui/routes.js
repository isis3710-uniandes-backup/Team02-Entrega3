import React from 'react';
import {render} from 'react-dom';
import{ Router, Route, Link} from 'react-router-dom';

//Componentes a Enrutar.

import OfertasList from './OfertasList';
import Login from './Login';
import SignIn from './SignIn';
import UsuarioOfertas from './UsuarioOfertas';
import Inicio from './Inicio';
import history from 'history'

const browserHistory = history.createBrowserHistory();


handleAuth = user => {
    this.setState({
        user: user
    });
};
/**
 * Rutas del front
 */

//TODO Arreglar el router para que no se solapen los componentes.

Meteor.startup(()=>{
    render(
        <Router history={browserHistory}>
             <Route exact path="/" component={Inicio}/>
            <Route exact path="/login" userf={this.handleAuth} component={Login}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/ofertas" component={OfertasList}/>
            <Route exact path="/uofertas" component={UsuarioOfertas}/>
        </Router>,
        document.getElementById('root')
    );
});
