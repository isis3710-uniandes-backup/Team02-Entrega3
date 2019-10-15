import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

//Componentes a Enrutar.

import OfertasList from './OfertasList';
import Login from './Login';
import SignIn from './SignIn';
import UsuarioOfertas from './UsuarioOfertas';
import Inicio from './Inicio';
import history from 'history';
import OfertasBoard from './OfertasBoard';

const browserHistory = history.createBrowserHistory();


/**
 * Rutas del front
 */


Meteor.startup(() => {

    handleAuth = user => {
    this.setState({
        user: user
    });
};
	render(
		<Router history={browserHistory}>
			<Route exact path="/" userf={this.handleAuth} component={Login} />
			<Route path="/login" userf={this.handleAuth} component={Login} />
			<Route path="/signin" component={SignIn} />
			<Route path="/ofertas" component={OfertasBoard} />
			<Route path="/uofertas" component={UsuarioOfertas} />
		</Router>,
		document.getElementById('root')
	);
});
