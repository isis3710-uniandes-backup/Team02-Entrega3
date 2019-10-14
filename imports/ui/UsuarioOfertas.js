/**
 * Componente React para la vista de las ofertas laborales.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Ofertas } from '../api/ofertas';
import { withTracker } from 'meteor/react-meteor-data';
import Oferta from './Oferta';

class UsuarioOfertas extends Component {

    // ! En las siguientes funciones se establece la llamada a las operaciones CRUD declaradas en el API.
    // ! Para el componente de lista solo dejaremos disponible crear nuevas ofertas.
    
    // ! Atencion: Se debe mandar el  usuario para consultar sus ofertas.
    // ! Se debe mandar por una propiedad llamada user.    

    // * Permite renderizar todas las ofertas disponibles para un usuario en la base de datos.

    renderOfertas() {
        //TODO Refactorizar el codigo de las ofertas para que quede bonito.
        let ofertas = this.props.ofertas; //Accede a las ofertas definidas en la DB, obtenidas por withTracker().
        let uOfertas = this.props.user.ofertas;
        let respuesta = []; //Componentes.
        for (let i of uOfertas) { //Ofertas del usuario.
            for (let j of ofertas) { //Ofertas totales.
                if (i._id === j._id) {
                    respuesta.push(<Oferta key={i._id} oferta={i}/>);
                }
            }
        }
        return respuesta; //Arreglo con los componentes.
    }
    
    render() {
        return (
            <div className="container-fluid">
                <h4 className="justify-content-center"> Ofertas Laborales </h4>
                <ul>{this.renderOfertas()}</ul>
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
    
})(UsuarioOfertas);