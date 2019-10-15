/**
 * Componente React para la vista de las ofertas laborales.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Ofertas } from '../api/ofertas';
import { withTracker } from 'meteor/react-meteor-data';
import Oferta from './Oferta';

class OfertasList extends Component {

    // ! En las siguientes funciones se establece la llamada a las operaciones CRUD declaradas en el API.
    // ! Para el componente de lista solo dejaremos disponible crear nuevas ofertas.    

    insertOferta = () => {
        // TODO Completar la accion de insertar una oferta dado un formulario, la info debe quedar en un diccionario.        
        let nuevaOferta = {};
        Meteor.call('ofertas.insert', nuevaOferta);
    };

    // * Permite renderizar todas las ofertas disponibles en la base de datos.

    renderOfertas() {
        //TODO Refactorizar el codigo de las ofertas para que quede bonito.
        let ofertas = this.props.ofertas; //Accede a las ofertas definidas en la DB, obtenidas por withTracker().
        return ofertas.map(elemento => {
            return (<Oferta key={elemento._id} oferta={elemento} principal={true} usuario={this.props.history.location}/>); //Renderizar cada una de las ofertas.
        });
    }

    componentDidMount(){
        console.log("props",this.props.history.location);
    }

    handleClickAgregarOferta = () => {
        $('#modalAgregarOferta').modal('show');
        console.log(`Datos: ${this.state.dataNuevaOferta}`);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("En metodo submit...");
        //Se atrapan los valores digitados por el usuario
        const salMin = event.target.salarioMinimo.value;
        const salMax = event.target.salarioMaximo.value;
        const ciudad = event.target.ciudad.value;
        const nombreOferta = event.target.nombreOferta.value;
        const descripcion = event.target.descripcion.value;
        const carreraProfesional = event.target.carreraProfesional.value;
        const fechaExpiracion = event.target.fechaExpiracion.value;
        const area = event.target.area.value;
        const experiencia = event.target.experiencia.value;
        const nivelEducacion = event.target.nivelEducacion.value;
        const tipoContrato = event.target.tipoContrato.value;

        console.log(`Salario minimo: ${salMin}`);
        console.log(`Salario maximo: ${salMax}`);
        console.log(`Ciudad: ${ciudad}`);
        console.log(`Nombre oferta: ${nombreOferta}`);
        console.log(`Descripcion: ${descripcion}`);
        console.log(`Carrera profesional: ${carreraProfesional}`);
        console.log(`Fecha expiracion: ${fechaExpiracion}`);
        console.log(`Area: ${area}`);
        console.log(`Experiencia: ${experiencia}`);
        console.log(`Nive educacion: ${nivelEducacion}`);
        console.log(`Tipo contrato: ${tipoContrato}`);
        // Unicamente se añade la oferta a la DB si se llenan todos los campos
        if (salMin != '' && salMax != '' && ciudad != '' && nombreOferta != '' && descripcion != '' && carreraProfesional != ''
            && fechaExpiracion != '' && area != '' && experiencia != '' && nivelEducacion != '' && tipoContrato != '') {
            Ofertas.insert({
                "salarioMin": salMin,
                "salarioMax": salMax,
                "ciudad": ciudad,
                "nombre": nombreOferta,
                "descripcion": descripcion,
                "CarreraProfesional": carreraProfesional,
                "fechaPublicacion": new Date(),
                "fechaExpiracion": fechaExpiracion,
                "area": area,
                "experiencia": experiencia,
                "nivelEducacion": nivelEducacion,
                "tipoContrato": tipoContrato
            })
        }
        //Se limpian los valores del formulario
        event.target.salarioMinimo.value = '';
        event.target.salarioMaximo.value = '';
        event.target.ciudad.value = '';
        event.target.nombreOferta.value = '';
        event.target.descripcion.value = '';
        event.target.carreraProfesional.value = '';
        event.target.fechaExpiracion.value = '';
        event.target.area.value = '';
        event.target.experiencia.value = '';
        event.target.nivelEducacion.value = '';
        event.target.tipoContrato.value = '';
        //Escondemos el modal que contiene el formulario
        $('#modalAgregarOferta').modal('hide');
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <h2 className="justify-content-center"> Ofertas Laborales </h2>
                        </div>
                        <div className="col-4">
                            <div className="row float-right">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAgregarOferta" onClick={this.handleClickAgregarOferta}>
                                    Agregar oferta
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">

                        {this.renderOfertas()}

                    </div>
                </div>

                <div className="modal fade" id="modalAgregarOferta" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agregar Oferta Laboral</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="form-oferta" onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="inputNombreOferta">Nombre </label>
                                        <input type="text" name="nombreOferta" className="form-control" id="inputNombreOferta" placeholder="Ej: Rappi Desarrollador Front-End"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputDescripcion">Descripcion </label>
                                        <textarea type="text" name="descripcion" className="form-control" id="inputDescripcion"
                                            placeholder="Ej: Desarrollador front-end con experiencia en frameworks como Angular y React."></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputCarreraProfesional">Carrera profesional </label>
                                        <input type="text" name="carreraProfesional" className="form-control" id="inputCarreraProfesional"
                                            placeholder="Ej: Ingeniería de Sistemas y Computación"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputArea">Area </label>
                                        <input type="text" name="area" className="form-control" id="inputArea"
                                            placeholder="Ej: Marketing"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputCiudad">Ciudad </label>
                                        <input type="text" name="ciudad" className="form-control" id="inputCiudad"
                                            placeholder="Ej: Medellin"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputFechaExpiracion">Fecha de expiracion </label>
                                        <input type="date" name="fechaExpiracion" className="form-control" id="inputFechaExpiracion"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputExperiencia">Experiencia </label>
                                        <input type="text" name="experiencia" className="form-control" id="inputExperiencia"
                                            placeholder="Ej: 2 años"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputNivelEducacion">Nivel de educacion </label>
                                        <input type="text" name="nivelEducacion" className="form-control" id="inputNivelEducacion"
                                            placeholder="Ej: Universitaria"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputTipoContrato">Tipo de contrato </label>
                                        <input type="text" name="tipoContrato" className="form-control" id="inputTipoContrato"
                                            placeholder="Ej: Contrato laboral flexible"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputSalarioMinimo">Salario mínimo </label>
                                        <input type="number" name="salarioMinimo" className="form-control" id="inputSalarioMinimo"
                                            placeholder="Ej: 1000"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputSalarioMaximo">Salario máximo </label>
                                        <input type="number" name="salarioMaximo" className="form-control" id="inputSalarioMaximo"
                                            placeholder="Ej: 2000"></input>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="submit" value="Submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

// ? Permite a la clase suscribirse al contenido de la colleccion y leer de manera reactiva los posibles cambios.
// ? El parametro al final (Ofertas) es el componente al cual se le asocia la consulta, este concepto esta definido
// ? como HoC - High Order Components, a mi parecer son como interfaces.
export default withTracker(() => {
    Meteor.subscribe('ofertas'); //La configuracion fue definida en ofertas.js en el API.

    // ! Estas son las vistas deseadas del contenido en la colleccion, son arreglos.
    // ! Si desea otras puede colocar una nueva entrada en el diccionario de salida cuyo valor es el arreglo consulta.

    return {
        ofertas: Ofertas.find({}).fetch(),
    };

})(OfertasList);

