/**
 * Permite crear el CRUD necesario para los usuarios en Meteor
 * Realiza de manera reactiva las actualizaciones y consultas.
 */

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Ofertas } from './ofertas';

const coleccion = "usuarios";
export const Usuarios = new Mongo.Collection(coleccion);

// * Meteor funciona con el patron publicacion/subscripcion, como Angular.
// * Permite crear un conjunto datos (la colleccion) llamada en el servidor, la funcion permite que un cliente
// * Se suscriba al contenido.
// * Detalles en: https://docs.meteor.com/api/pubsub.html#Subscription-userId.

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish(coleccion, function ofertasPublication() {
      return Usuarios.find({
        $or: [          
          { owner: this.userId },
        ],
      });
    });
}

// * A continuacion se describen los metodos que realiza el componente de ofertas (CRUD)
// * Los siguientes metodos realizan operaciones a nivel de base de datos
// * Unicamente se encuentran todas las operaciones que no son GET, esta ultima se accede con vistas con withTracker() en el componente de UI.

//! Atencion: Todos los metodos de consulta y escritura en MongoDB para Meteor requieren que el ID que se pase
//! Sea de Tipo ObjectID - generalmente esta en la propiedad _id del documento.

Meteor.methods({
    
    // ? El parametro usuario es un diccionario con la estructura de los datos de usuario.
    'usuarios.insert'(usuario) {
        //Ejecutar la accion en la base de datos sobre la colleccion.
        Usuarios.insert(usuario);
    },

    // ? Elimina a un usuario de la aplicacion
    'usuarios.remove'(usuarioID) {
        //Busca la oferta para eliminarla
        const usuario = Usuarios.findOne(usuarioID); //Obtiene el documento de la oferta dada su ID
        if (usuario ===  undefined || usuario === null) {
            throw new Meteor.Error(`[Usuarios] Lo sentimos el usuario con ID: ${usuarioID} no existe.`);
        }
        //Borrar la oferta.
        Usuarios.remove(usuarioID);
    },

    // ? Actualiza la informacion de un usuario.
    'usuarios.update'(usuarioID, bUsuario) {
        const usuario = Usuarios.findOne(usuarioID); //Obtiene el documento de la oferta dada su ID
        if (usuario ===  undefined || usuario === null) {
            throw new Meteor.Error(`[Usuarios] Lo sentimos el usuario con ID: ${usuarioID} no existe.`);
        }

        Usuarios.update(usuarioID, {$set: bUsuario}, {returnNewDocument: true});
    },

    // ? Asocia una oferta laboral con un usuario cuando es de su preferencia.
    'usuarios.insert.oferta'(usuarioID, ofertaID) {
        const usuario = Usuarios.findOne(usuarioID); //Obtiene el documento de la oferta dada su ID
        if (usuario ===  undefined || usuario === null) {
            throw new Meteor.Error(`[Usuarios] Lo sentimos el usuario con ID: ${usuarioID} no existe.`);
        }

        const oferta = Ofertas.findOne(ofertaID); //Obtiene el documento de la oferta dada su ID
        if (oferta ===  undefined || oferta === null) {
            throw new Meteor.Error(`[Ofertas] Lo sentimos la oferta laboral con ID: ${ofertaID} no existe.`);
        }

        //Agregar la nueva id al arreglo.
        let uOfertas = usuario.ofertas;
        console.log(uOfertas);
        uOfertas.push(ofertaID);
        console.log(`Las ofertas del usuario ${usuarioID} son: ${uOfertas}`);

        //Actualizar
        Usuarios.update(usuarioID, {$set: {ofertas: uOfertas}}, {returnNewDocument: true});
    },
    
    // ? Elimina una oferta laboral favorita de un usuario.

    'usuarios.remove.oferta'(usuarioID, ofertaID) {
        const usuario = Usuarios.findOne(usuarioID); //Obtiene el documento de la oferta dada su ID
        if (usuario ===  undefined || usuario === null) {
            throw new Meteor.Error(`[Usuarios] Lo sentimos el usuario con ID: ${usuarioID} no existe.`);
        }      

        //Eliminar el ID de la oferta.
        let uOfertas = usuario.ofertas.filter(element => element !== ofertaID);        
        console.log(`Las ofertas del usuario ${usuarioID} son: ${uOfertas}`);

        //Actualizar
        Usuarios.update(usuarioID, {$set: {ofertas: uOfertas}}, {returnNewDocument: true});
    },    
});