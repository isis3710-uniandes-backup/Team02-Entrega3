import React from 'react';
import {render} from 'react-dom';
import{
    HashRouter,
  Route,
  Link
} from 'react-router-dom';
import OfertasList from './OfertasList';
import Login from './Login';
import Inicio from './Inicio';
/**
 * Rutas del front(esta login y ofertas por ahora)
 */
Meteor.startup(()=>{
    render(<HashRouter >
        <Route path="/" component={Inicio}/>
        <Route path="/login" component={Login}/>
        <Route path="/ofertas" component={OfertasList}/>
    </HashRouter>,
        document.getElementById('root')
        );
});
