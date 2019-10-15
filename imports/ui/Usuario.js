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
        console.log(this.props.user);       
        return(
            <div className="container-fluid card justify-content-center">
                <div className="row">
                    <h5> Nombre:  </h5>
                    <h5>{data.nombre}</h5>
                </div>
                <div className="row">
                    <h5> Email: </h5>
                    <h5>{data.correo}</h5>
                </div>
            </div>
        );
    }
}