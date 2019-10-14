import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Inicio extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h4 className="justify-content-center"> Página de inicio </h4>
            </div>
        );
    };
}

export default withRouter(Inicio);