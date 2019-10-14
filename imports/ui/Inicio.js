import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import OfertasList from './OfertasList';
class Inicio extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h4 className="justify-content-center"> Página de inicio </h4>
                <OfertasList></OfertasList>
            </div>
        );
    };
}

export default withRouter(Inicio);