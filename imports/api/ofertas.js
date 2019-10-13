/**
 * Permite crear el CRUD necesario para las ofertas en Meteor
 * Realiza de manera reactiva las actualizaciones y consultas.
 */

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Ofertas = Mongo.Collection('ofertas');

// * Meteor funciona con el patron publicacion/subscripcion, como Angular.
// * Permite crear un conjunto datos (la colleccion) llamada en el servidor, la funcion permite que un cliente
// * Se suscriba al contenido.
// * Detalles en: https://docs.meteor.com/api/pubsub.html#Subscription-userId.

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('ofertas', function ofertasPublication() {
      return Ofertas.find({
        $or: [          
          { owner: this.userId },
        ],
      });
    });
}

// * A continuacion se describen los metodos que realiza el componente de ofertas (CRUD)
// * Los siguientes metodos realizan operaciones a nivel de base de datos
// * Unicamente se encuentran todas las operaciones que no son GET, esta ultima se accede con vistas con withTracker() en el componente de UI.

Meteor.methods({

    // ? El parametro oferta es un diccionario con la estructura de la oferta laboral.
    'ofertas.insert'(oferta) {
        
        // Seguridad para la acción.
        if (! this.userId) {
            throw new Meteor.Error('[Ofertas] Usuario No Autorizado');
        }

        //Ejecutar la accion en la base de datos sobre la colleccion.
        Ofertas.insert(oferta);
    },

    // ? Elimina una oferta laboral dada su ID.
    'ofertas.remove'(ofertaID) {
        //Busca la oferta para eliminarla
        const oferta = Ofertas.findOne(ofertaID); //Obtiene el documento de la oferta dada su ID
        if (oferta ===  undefined || oferta === null) {
            throw new Meteor.Error(`[Ofertas] Lo sentimos la oferta laboral con ID: ${ofertaID} no existe.`);
        }
        //Borrar la oferta.
        Ofertas.remove(ofertaID);
    },

    // ? Actualiza una oferta laboral dada su ID.
    'ofertas.update'(ofertaID, bOferta) {
        const oferta = Ofertas.findOne(ofertaID); //Obtiene el documento de la oferta dada su ID
        if (oferta ===  undefined || oferta === null) {
            throw new Meteor.Error(`[Ofertas] Lo sentimos la oferta laboral con ID: ${ofertaID} no existe.`);
        }

        Ofertas.update(ofertaID, {$set: bOferta}, {returnNewDocument: true});
    },
});