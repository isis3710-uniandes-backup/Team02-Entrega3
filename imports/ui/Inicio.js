import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import OfertasList from './OfertasList';
import OfertasBoard from './OfertasBoard';
class Inicio extends Component {
    render() {
        return (
            <div className="container-fluid">
                <OfertasBoard/>
            </div>
        );
    };
}

export default withRouter(Inicio);