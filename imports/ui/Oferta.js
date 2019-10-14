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
        //TODO Terminar bien la visualizacion de la oferta, dejar el HTML bonito.
        const {oferta} = this.props; //Declaracion oferta = this.props.oferta
        return(
            <div className="container-fluid">
                <div className="card justify-content-center">
                    <h5 className="justify-content-center">{oferta.nombre}</h5>
                    <div className="row align-content- center">
                        <h5>Ciudad</h5>
                        <h5 className="justify-content-center">{oferta.ciudad}</h5>
                    </div>
                    <div className="row align-content- center">
                        <h5>Salario Minimo</h5>
                        <h5 className="justify-content-center">{oferta.salarioMin}</h5>
                        <h5>Salario Maximo</h5>
                        <h5 className="justify-content-center">{oferta.salarioMax}</h5>                        
                    </div>
                    <div className="row align-content- center">
                        <h5>Carrera Profesional</h5>
                        <h5 className="justify-content-center">{oferta.carreraProfesional}</h5>                                               
                    </div>                                                                                
                    <button type="button" className="btn btn-danger" onClick={this.deleteOferta.bind(this)}> Eliminar Oferta</button>
                </div>               
            </div>
        );
    };
}