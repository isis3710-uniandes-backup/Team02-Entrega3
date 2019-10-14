import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Ofertas } from '../api/ofertas';
import { withTracker } from 'meteor/react-meteor-data';
import Oferta from './Oferta';


export default class Login extends Component {
render() {
    return (
        <div className="container-fluid">
            <h4 className="justify-content-center"> Login </h4>
        </div>
    );
};
}