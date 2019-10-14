import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Login extends Component {

	/**
	 * * Las variables del estado son: uname - Nombre de usuario y upass - Contraseña digitada.
	 */

	state = {
		uname: "",
		upass: ""
	}



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
								<button type="button"  className="btn btn-primary m-3"> Log In </button>
								<button type="button"  className="btn btn-secondary m-3">Register</button>
							</div>
						</form>
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="1000">
					<div className='col-4 justify-content-center centrar card p-3 mb-5'>
						<div className="card-body">
							<h5 className="card-title text-center">⏱⏱ About us ⏱⏱</h5>
							<p className="card-text text-center"> We are here to manage your tasks for all the proyects you have. Manage every single task stage and assign them to your colleagues. Most importantly: record How much time takes you to do each task.</p>
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

export default withRouter(Login);