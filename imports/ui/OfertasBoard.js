import React, { Component } from 'react';
import OfertasList from './OfertasList';
import FilterColumn from './FilterColumn';
import UsuarioOfertas from './UsuarioOfertas';

class OfertasBoard extends Component {

    state = {
        favoritos : false
    }

    componentDidMount(){
        console.log(this.props);
        console.log(this.props.history.location.correo);


    }

    changeFavoritos = ()=>{
        this.setState({favoritos: true});
    }

    changeHome = ()=>{
        this.setState({favoritos: false});
    }

    showFavoritos = ()=>{
        if(this.state.favoritos == false){
            return <div className="row">
            <div className="col-4">
                <FilterColumn />
            </div>
            <div className="col-8">
                <OfertasList usuario={this.props.history.location}/>
            </div>
        </div>
        }else{
            return <div className="row">
            <div className="col-12">
                <UsuarioOfertas usuario={this.props.history.location}/>
            </div>
        </div>
        }
    }

    render() {
        return (
            <div>

                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
                    <a className="navbar-brand" href="#">Jobs Search</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" onClick={this.changeHome} href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" onClick={this.changeFavoritos}>Favoritos</a>
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
                <br></br>
                <br></br>
                {this.showFavoritos()}

            </div>
        );
    }
}

export default OfertasBoard;