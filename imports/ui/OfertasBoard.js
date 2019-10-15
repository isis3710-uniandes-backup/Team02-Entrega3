import React, { Component } from 'react';
import OfertasList from './OfertasList';
import FilterColumn from './FilterColumn';
import UsuarioOfertas from './UsuarioOfertas';
import Usuario from './Usuario';

class OfertasBoard extends Component {

	logOut = () => {
		this.props.history.push({
			pathname: '/'
		});
	};

    getInput = (searchVar,ciudadV,educacionV, salarioMaximoV, salarioMinimoV) =>
    {
        this.setState({search: searchVar});
        this.setState({ciudad: ciudadV});
        this.setState({educacion: educacionV});
        this.setState({salarioMaximo: salarioMaximoV});
        this.setState({salarioMinimo: salarioMinimoV});
   
    }
   
	state = {
        favoritos: 0,
        search: ''
	};

	updateUser = (x) => {
		this.props.history.location.ofertas.push(x);
	};

	changeFavoritos = () => {
		this.setState({ favoritos: 1 });
	};

	changeHome = () => {
		this.setState({ favoritos: 0 });
	};

	changeCuenta = () => {
		this.setState({ favoritos: 2 });
	};

	showFavoritos = () => {
		if (this.state.favoritos == 0) {
			return (
				<div className="row">
					<div className="col-4">
                    <FilterColumn searchCallback = {this.getInput}/>
					</div>
					<div className="col-8">
						<OfertasList usuario={this.props.history.location} fUpdate={this.updateUser}   searchProp ={this.state.search} ciudadProp ={this.state.ciudad} educacionProp ={this.state.educacion} 
                        salarioMaximoProp ={this.state.salarioMaximo} salarioMinimoProp ={this.state.salarioMinimo}/>
					</div>
				</div>
			);
		} else if (this.state.favoritos == 1) {
			return (
				<div className="row">
					<div className="col-12">
						<UsuarioOfertas usuario={this.props.history.location} fUpdate={this.updateUser} />
					</div>
				</div>
			);
		} else {
			return (
				<div className="row justify-content-center">
					<div className="col-">
						<Usuario user={this.props.history.location} />
					</div>
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
					<a className="navbar-brand">Jobs Search</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link" onClick={this.changeHome}>
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-item nav-link" onClick={this.changeFavoritos}>
								Favoritos
							</a>
							<a className="nav-item nav-link" onClick={this.changeCuenta}>
								Mi Cuenta
							</a>
						</div>
					</div>
					<div>
						<button className="btn btn-danger" onClick={this.logOut}>
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
