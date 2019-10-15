/**
 * Vista de la informacion del usuario
 */

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Usuario extends Component {
    // ! Este componente debe recibir la informacion del usuario por medio del props.
    // ! El diccionario debe llamarse user.   
    render() {
        let data = this.props.user; //Datos del usuario.      
        return (
            <div className="card justify-content-center">

                <div className="card-header text-center">
                    <h2>Mi cuenta</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group">

                        <li className="list-group-item list-group-item-light"><strong>Usuario:</strong> {data.nombre} </li>
                        <li className="list-group-item list-group-item-light"><strong>Correo:</strong> {data.correo} </li>


                    </ul>
                </div>
            </div>
        );
    }
}