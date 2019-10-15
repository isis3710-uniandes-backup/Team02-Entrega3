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
    
    // ! Atencion: Se debe mandar el usuario para consultar sus ofertas.
    // ! Se debe mandar por una propiedad llamada user.    

    // * Permite renderizar todas las ofertas disponibles para un usuario en la base de datos.
    // * Actualizar el estado del componente con el objeto user que llega. user: this.props.user.

    state = {
        //Asignarlo por el valor en props.
        //! Si desea hacer pruebas que el _id corresponda a un usuario en la base de datos al igual que el tag de la oferta.

        user : { 
            "_id" : this.props.usuario._id,
            "nombre": this.props.usuario.nombre,
            "email": this.props.usuario.email,
            "password": this.props.usuario.password,
            "ofertas": this.props.usuario.ofertas
        }
    };

    componentDidMount() {
        console.log("Propiedades", this.props);
    };

    deleteOferta = (ofertaId) => {
        this.state.user.ofertas.splice(ofertaId, 1); //Elimina el elemento con el id dado.
        this.setState({user: this.state.user}); //Actualizar el estado del componente.
        let o_id = new Meteor.Collection.ObjectID(this.state.user._id); //Despues de un siglo .____.
        Meteor.call('usuarios.remove.oferta', o_id, ofertaId);        
    }

    renderOfertas() {
        //TODO Refactorizar el codigo de las ofertas para que quede bonito.
        // ! Atencion: Debido a que falta los datos del usuario para pasarselo por el props. Esto se explota.
        // ! Se deja un usuario de prueba.

        let ofertas = this.props.ofertas; //Accede a las ofertas definidas en la DB, obtenidas por withTracker().                
        // ? Comentario Personal: Meteor se explota con cualquier undefined y no compila nada :'( incluso en consultas de tipo (if a === undefined).
        //TODO Pasar la informacion del usuario cuando se conecta y deshabilitar el user de prueba.       

        let uOfertas = this.state.user.ofertas;        
        console.log("[UsuarioOfertas] Propiedades", this.props);        
        let respuesta = []; //Componentes.

        for (let i of uOfertas) { //Ofertas del usuario.
            for (let j of ofertas) { //Ofertas totales.                
                if (i === j._id) {
                    respuesta.push(<Oferta key={j._id} oferta={j} principal={false} delete={this.deleteOferta} usuario={this.props.usuario} fUpdate={this.props.fUpdate}/>);
                }
            }
        }
        
        return respuesta; //Arreglo con los componentes.
    }
    
    render() {
        return (
            <div className="container-fluid">
                <h2 className="justify-content-center"> Mis ofertas </h2>
                {this.renderOfertas()}
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