import React, { Component } from 'react';
import {Usuarios} from '../api/usuarios';
import { withTracker } from 'meteor/react-meteor-data';

class Login extends Component {

	/**
	 * * Las variables del estado son: uname - Nombre de usuario y upass - Contraseña digitada.
	 */

	state = {
		uname: "",
		upass: ""
	}

	clickSignIn = () => {
		this.props.history.push({
			pathname: '/signin'
		})
	}

	getLogData = (user, pass) => {
		try {  for(let i = 0;i<this.props.usuarios.length;i++){
			if(this.props.usuarios[i].nombre==user && this.props.usuarios[i].password==pass){
				return this.props.usuarios[i];
			}
		}}
		catch (error) { console.error(`Error fatal trayendo los datos del login: ${error}`) }
	};

	clickLog = async (event) => {
		//* Actualizar el componente sin dar refresh		
		event.preventDefault();

		if (this.state.uname.length === 0) return alert("Please enter your username");
		if (this.state.upass.length === 0) return alert("Please enter your password");

		//* Llamar al backend: Peticion traer los datos de inicio de sesión.
		//* Llamada al backend con axios.

		let res = this.getLogData(this.state.uname, this.state.upass)
			let data = res;
			if (data === undefined) return alert("The email and password doesn't match with any registered user, check the credentials");

			//* Actualizar el nombre de usuario con el estado padre.
			let user_data = data; //Datos del usuario.
			this.props.history.push({ //* Actualizar la vista.
				pathname: '/ofertas',
				correo: user_data.mail
			});
	};



//TODO hacer que el login funcione
	render() {
		return (
			<div>
				<div data-aos="flip-left" data-aos-duration="1000">
					<div id="card-login" className="col-4 justify-content-center centrar card p-3 mb-5 shadow">
						<div className="container-fluid justify-content-center">
							<h1 className="text-center mb4">Job Searcher</h1>
							<img alt='logo' className="rounded mx-auto d-block " height='60%' width='60%'></img>
							<h5 className="text-center mt-3">Login</h5>
						</div>
						<form className="">
							<div className="form-group">
								<label>Username</label>
								<input type="text" name="uName" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter your username" onChange={(evt) => this.setState({ uname: evt.target.value })} required />
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="password" name="uPass" className="form-control" id="userPass" placeholder="User's account password" onChange={(evt) => this.setState({ upass: evt.target.value })} required />
							</div>
							<div className="row justify-content-center">
								<button type="button" onClick={this.clickLog} className="btn btn-primary m-3"> Log In </button>
								<button type="button" onClick={this.clickSignIn} className="btn btn-secondary m-3">Register</button>
							</div>
						</form>
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="1000">
					<div className='col-4 justify-content-center centrar card p-3 mb-5'>
						<div className="card-body">
							<h5 className="card-title text-center">⏱⏱ About us ⏱⏱</h5>
							<p className="card-text text-center"> We are here to help you find the best job offers!</p>
						</div>
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="1000">
					<div className='col-4 justify-content-center centrar card p-3 mb-5'>
						<div className="card-body">
							<h5 className="card-title text-center">⏱⏱Easter egg⏱⏱</h5>
							<p className="card-text text-center"> you have encouterd an easter egg</p>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default withTracker(() => {
    Meteor.subscribe('usuarios'); //La configuracion fue definida en ofertas.js en el API.

    // ! Estas son las vistas deseadas del contenido en la colleccion, son arreglos.
    // ! Si desea otras puede colocar una nueva entrada en el diccionario de salida cuyo valor es el arreglo consulta.

    return {
        usuarios: Usuarios.find({}).fetch(),
    };

})(Login);
