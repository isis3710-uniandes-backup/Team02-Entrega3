import React from 'react';
import {render} from 'react-dom';
import{
    HashRouter,
  Route,
  Link
} from 'react-router-dom';
import OfertasList from './OfertasList';
import Login from './Login';
/**
 * Rutas del front(esta login y ofertas por ahora)
 */
Meteor.startup(()=>{
    render(<HashRouter >
        <Route path="/login" component={Login}/>
        <Route path="/ofertas" component={OfertasList}/>
    </HashRouter>,
        document.getElementById('root')
        );
});
