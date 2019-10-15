/**
 * Vista detalle de una oferta laboral.
 */

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Ofertas } from '../api/ofertas';
import OfertasList from './OfertasList';

export default class Oferta extends Component {
    // ! En las siguientes funciones se establece la llamada a las operaciones CRUD declaradas en el API.
    // ! Aqui se incluyen las diferentes opciones que no son parte del Retrieve en el CRUD.

    constructor(props) {
        super(props);
        this.handleVerMas = this.handleVerMas.bind(this);
        this.state = { verMas: false };
    }

    handleVerMas() {

        if (this.state.verMas == true) {
            this.setState({ verMas: false })
        }
        else {
            this.setState({ verMas: true })
        }

    }

    // ? Elimina la oferta actual.
    deleteOferta = () => {
        if (this.props.principal) {
            Meteor.call('ofertas.remove', this.props.oferta._id); //Elimina la oferta actual.
        }
        else {
            //Debe existir obligatoriamente una funcion para eliminar a la oferta del estado del usuario .
            this.props.delete(this.props.oferta._id._str);
        }
    };

    // ? Actualiza los valores de la oferta actual.
    updateOferta = () => {
        //TODO Crear un formulario bonito y actualizar los datos.
        let update = {};
        Meteor.call('ofertas.update', this.props.oferta._id, update); //Actualiza la oferta actual en la DB.
    };

    añadirOfertaAUsuario() {
        //TODO poner routing del usuario y cambiar esto
        console.log(`El ID del usuario es: ${this.props.usuario._id}`);
        console.log(`El ID de la oferta es: ${this.props.oferta._id}`);
        //let o_id = new Meteor.Collection.ObjectID(this.props.usuario._id);
        Meteor.call('usuarios.insert.oferta', this.props.usuario._id, this.props.oferta._id);
    }

    verMas() {
        const { oferta } = this.props; //Declaracion oferta = this.props.oferta

    }

    checkUser() {
        if (this.props.usuario.nombre === this.props.oferta.usuario) {
            return <div className="col-3">
                <button type="button" className="btn btn-danger" onClick={this.deleteOferta.bind(this)}> <i className="fas fa-trash prefix grey-text"></i></button>
            </div>;
        } else {
            return '';
        }
    }

    render() {
        //TODO Terminar bien la visualizacion de la oferta, dejar el HTML bonito.
        const { oferta } = this.props; //Declaracion oferta = this.props.oferta
        const verMas = this.state.verMas;
        if (this.state.verMas) {
            return (
                <div className="col-6">
                    <div className="card bg-secondary shadow m-3">
                        <div className="card-header">
                            <div className="row justify-content-center"><h2 className="card-title text-white">{oferta.nombre}</h2></div>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">

                                <li className="list-group-item list-group-item-light"><strong>Descripcion:</strong> {oferta.descripcion} </li>
                                <li className="list-group-item list-group-item-light"><strong>Ciudad:</strong> {oferta.ciudad} </li>
                                <li className="list-group-item list-group-item-light"><strong>Salario mínimo:</strong> {oferta.salarioMin} </li>
                                <li className="list-group-item list-group-item-light"><strong>Salario máximo:</strong> {oferta.salarioMax} </li>
                                <li className="list-group-item list-group-item-light"><strong>Carrera profesional:</strong> {oferta.carreraProfesional} </li>
                                <li className="list-group-item list-group-item-light"><strong>Fecha Expiración:</strong> {oferta.fechaExpiracion} </li>
                                <li className="list-group-item list-group-item-light"><strong>Area:</strong> {oferta.area} </li>
                                <li className="list-group-item list-group-item-light"><strong>Experiencia:</strong> {oferta.experiencia} </li>
                                <li className="list-group-item list-group-item-light"><strong>Nivel de Educación:</strong> {oferta.nivelEducacion} </li>
                                <li className="list-group-item list-group-item-light"><strong>Tipo de Contrato:</strong> {oferta.tipoContrato} </li>


                            </ul>
                            <br></br>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">

                                        {this.checkUser()}

                                        <div className="col-3">
                                            <button type="button" className="btn btn-warning" onClick={this.añadirOfertaAUsuario.bind(this)}> <i className="far fa-star"></i></button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className="btn btn-info" onClick={this.handleVerMas.bind(this)}>Ver más</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            );
        }
        else {

            return (
                <div className="col-6">
                    <div className="card bg-secondary shadow m-3">
                        <div className="card-header">
                            <div className="row justify-content-center"><h2 className="card-title text-white">{oferta.nombre}</h2></div>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-light"><strong>Descripcion:</strong> {oferta.descripcion} </li>
                                <li className="list-group-item list-group-item-light"><strong>Ciudad:</strong> {oferta.ciudad} </li>
                                <li className="list-group-item list-group-item-light"><strong>Salario mínimo:</strong> {oferta.salarioMin} </li>
                                <li className="list-group-item list-group-item-light"><strong>Salario máximo:</strong> {oferta.salarioMax} </li>
                                <li className="list-group-item list-group-item-light"><strong>Carrera profesional:</strong> {oferta.carreraProfesional} </li>

                            </ul>
                            <br></br>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        {this.checkUser()}
                                        <div className="col-3">
                                            <button type="button" className="btn btn-warning" onClick={this.añadirOfertaAUsuario.bind(this)}> <i className="far fa-star"></i></button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className="btn btn-info" onClick={this.handleVerMas.bind(this)}>Ver más</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            );

        }

    };
}