import React from 'react';
import {render} from 'react-dom';
import{ HashRouter, Route, Link} from 'react-router-dom';

//Componentes a Enrutar.

import OfertasList from './OfertasList';
import Login from './Login';
import Inicio from './Inicio';
import UsuarioOfertas from './UsuarioOfertas';

/**
 * Rutas del front(esta login y ofertas por ahora)
 */

//TODO Arreglar el router para que no se solapen los componentes.

Meteor.startup(()=>{
    render(
        <HashRouter >
            <Route path="/" component={Inicio}/>
            <Route path="/login" component={Login}/>
            <Route path="/ofertas" component={OfertasList}/>
            <Route path="/uofertas" component={UsuarioOfertas}/>
        </HashRouter>,
        document.getElementById('root')
    );
});
