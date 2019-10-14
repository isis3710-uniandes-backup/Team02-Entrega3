/**
 * Vista detalle de una oferta laboral.
 */

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Ofertas } from '../api/ofertas';

export default class Oferta extends Component {
    // ! En las siguientes funciones se establece la llamada a las operaciones CRUD declaradas en el API.
    // ! Aqui se incluyen las diferentes opciones que no son parte del Retrieve en el CRUD.

    // ? Elimina la oferta actual.
    deleteOferta = () => {
        Meteor.call('ofertas.remove', this.props.oferta._id); //Elimina la oferta actual.
    };

    // ? Actualiza los valores de la oferta actual.
    updateOferta = () => {
        //TODO Crear un formulario bonito y actualizar los datos.
        let update = {};
        Meteor.call('ofertas.update', this.props.oferta._id, update); //Actualiza la oferta actual en la DB.
    };

    render() {
        const {oferta} = this.props; //Declaracion oferta = this.props.oferta
        return(
            <div className="container-fluid">
                {
                    Object.keys(oferta).map((key, index) => (
                        <h5 key={index} className="justify-content-center"> {key}: {oferta[key]}</h5>
                    ))
                }
                <button type="button" className="btn btn-danger" onClick={this.deleteOferta.bind(this)}> Eliminar Oferta</button>
            </div>
        );
    };
}