import React, { Component } from 'react';

class FilterColumn extends Component {

    componentDidMount() {
        //Buscar ciudades Colombia

    }

    render() {
        return (
            <div className="container-fluid">
                <h2>Filtros de busqueda</h2>
                <br></br>
                <div className="card shadow">
                    <div className="card-body">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Buscar oferta" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary" type="button"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <h5>Rango de salarios</h5>
                            <div className="row">
                                <div className="col-5">
                                    <p>Salario mínimo:</p>
                                </div>
                                <div className="col-7">
                                    <input type="number" name="salarioMinimo" className="form-control" id="inputSalarioMinimo"
                                        placeholder="Ej: 1000"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <p>Salario máximo:</p>
                                </div>
                                <div className="col-7">
                                    <input type="number" name="salarioMaximo" className="form-control" id="inputSalarioMaximo"
                                        placeholder="Ej: 2000"></input>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-5">
                                        <label for="sel1">Ciudad:</label>
                                    </div>
                                    <div className="col-7">
                                        <select className="form-control" id="sel1">
                                            <option>Bogotá</option>
                                            <option>Medellin</option>
                                            <option>Cartagena</option>
                                            <option>Santa Marta </option>
                                            <option>Cali </option>
                                            <option>Bucaramanga </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-5">
                                        <label for="sel2">Nivel de educación:</label>
                                    </div>
                                    <div className="col-7">
                                        <select className="form-control" id="sel2">
                                            <option>Ninguna</option>
                                            <option>Universitaria</option>
                                            <option>Posgrado</option>
                                            <option>Doctorado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        );
    }
}

export default FilterColumn;