import React, { Component } from 'react';

class FilterColumn extends Component {


    state = {
        search: '',
        ciudad: '',
        educacion: '',
        salarioMaximo: 0,
        salarioMinimo: 0
    }


    mandarSearch = () => {
        var searchVar = document.getElementById("search").value;
        var ciudadV = document.getElementById("ciudad").value;
        var educacionV = document.getElementById("educacion").value;
        var salarioMaximoV = document.getElementById("inputSalarioMaximo").value;
        var salarioMinimoV = document.getElementById("inputSalarioMinimo").value;

        this.setState({search: searchVar});
        this.setState({ciudad: ciudadV});
        this.setState({educacion: educacionV});
        this.setState({salarioMaximo: salarioMaximoV});
        this.setState({salarioMinimo: salarioMinimoV});
        this.props.searchCallback(searchVar,ciudadV,educacionV, salarioMaximoV, salarioMinimoV);
    }



    render() {
        return (
            <div className="container-fluid">
                <h2>Filtros de busqueda</h2>
                <br></br>
                <div className="card shadow">
                    <div className="card-body">
                    <div className="input-group mb-3">
                            <input type="text" id="search" className="form-control" placeholder="Buscar oferta" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" ><i className="fas fa-search"></i></button>
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
                                    <label htmlFor="sel1">Ciudad:</label>
                                    </div>
                                    <div className="col-7">
                                        <select className="form-control" id="ciudad">
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
                                    <label htmlFor="sel2">Nivel de educación:</label>
                                    </div>
                                    <div className="col-7">
                                        <select className="form-control" id="educacion">
                                            <option>Ninguna</option>
                                            <option>Universitaria</option>
                                            <option>Posgrado</option>
                                            <option>Doctorado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row float-right">
                            <div className="col-12">
                                <button className="btn btn-success" type="button" onClick={this.mandarSearch}><i className="fas fa-filter"></i> Filtrar ofertas</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        );
    }
}

export default FilterColumn;