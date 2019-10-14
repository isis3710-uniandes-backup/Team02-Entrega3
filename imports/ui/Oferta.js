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

    render() {
        //TODO Terminar bien la visualizacion de la oferta, dejar el HTML bonito.
        const { oferta } = this.props; //Declaracion oferta = this.props.oferta
        return (

            <div className="card bg-secondary shadow">
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
                        <div className="col-10">
                            <div className="row">
                                <div className="col-3">
                                    <button type="button" className="btn btn-danger" onClick={this.deleteOferta.bind(this)}> <i className="fas fa-trash prefix grey-text"></i></button>
                                </div>
                                <div className="col-3">
                                    <button type="button" className="btn btn-warning" > <i class="far fa-star"></i></button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-info" >Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}