
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
class SignIn extends Component {

    /**
     * *Declaración del estado del componente:
     * *username: Nombre del nuevo usuario que se desea crear
     * *email: Dirección de correo asociada al nuevo usuario.
     * *password: Contraseña del usuario.
     */

    state = {nombre:"", email:"", password:"",ofertas:[]}

    //* Realiza el registro en la base de datos para el nuevo usuario.
    //* @param data - Objeto con los datos del nuevo usuario userName, mail, password.

    registerUser = (data) => {
        try {Meteor.call('usuarios.insert',data);}
        catch (error) {console.error(`Error realizando el post de los datos: ${error}`)}
    };

    clickRegister = async () => {

        //* Mirar si todos los datos del campo estan correctos.
        let empty = 0;
        for (const [key, value] of Object.entries(this.state)) {
            console.log(`Clave: ${key}, valor: ${value}`);
            if (value.length === 0) empty++;

        }


        //* Registrar el usuario
        this.registerUser(this.state)
            this.props.history.push({ //Enviar de regreso al login
                pathname: '/login' 
            });
            return alert(`The user ${this.state.nombre} has been created succesfully`);        
    };

    render() {
        return (
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className="col-4 justify-content-center centrar card p-3 mb-5 shadow">
            	<h1 className="text-center mb4">Time Tasks</h1>
				<img alt = 'logo' className="rounded mx-auto d-block " height = '60%' width = '60%'></img>
                <h5 className="align-content-center mt-3"> Sign In </h5>
                <form>
					<div className="form-group">
						<label>User name</label>
						<input type="text" className="form-control" id="nombre" aria-describedby="User name" placeholder="Enter your user name" onChange={(evt) => this.setState({nombre: evt.target.value})} required/>						
					</div>
					<div className="form-group">
						<label>User's Email</label>						
						<input type="email" className="form-control" id="email" placeholder="Enter your email address" onChange={(evt) => this.setState({email: evt.target.value})} required/>
					</div>
                    <div className="form-group">
						<label>Password</label>						
						<input type="password" className="form-control" id="password" placeholder="Enter a safe password" onChange={(evt) => this.setState({password: evt.target.value})} required/>
					</div>		
					<div className="row button-row">
						<button type="button" onClick={this.clickRegister} className="btn btn-success logButtonSpace"> Register </button>					
					</div>
				</form>
            </div>
            </div>
        )
    }
}
export default withRouter(SignIn);