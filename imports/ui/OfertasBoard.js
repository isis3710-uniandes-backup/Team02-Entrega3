import React, { Component } from 'react';
import OfertasList from './OfertasList';
import FilterColumn from './FilterColumn';

class OfertasBoard extends Component {

    getInput = (searchVar,ciudadV,educacionV, salarioMaximoV, salarioMinimoV) =>
    {
        this.setState({search: searchVar});
        this.setState({ciudad: ciudadV});
        this.setState({educacion: educacionV});
        this.setState({salarioMaximo: salarioMaximoV});
        this.setState({salarioMinimo: salarioMinimoV});
        console.log("llego al get input");
        console.log(salarioMinimoV);
    }
    state = {
        search: ''
       
    }
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <a className="navbar-brand" href="#">Jobs Search</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Favoritos</a>
                            <a className="nav-item nav-link" href="#">Mi Cuenta</a>
                        </div>
                    </div>
                    <div>
                        <button className="btn-danger">
                            Log Out
                        </button>
                    </div>

                </nav>
                <br></br>
                <div className="row">
                    <div className="col-4">
                        <FilterColumn searchCallback = {this.getInput}/>
                    </div>
                    <div className="col-8">
                        <OfertasList usuario={this.props.history.location} searchProp ={this.state.search} ciudadProp ={this.state.ciudad} educacionProp ={this.state.educacion} 
                        salarioMaximoProp ={this.state.salarioMaximo} salarioMinimoProp ={this.state.salarioMinimo}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default OfertasBoard;