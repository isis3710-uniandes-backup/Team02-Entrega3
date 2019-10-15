import React, { Component } from 'react';
import OfertasList from './OfertasList';
import FilterColumn from './FilterColumn';

class OfertasBoard extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <FilterColumn />
                    </div>
                    <div className="col-8">
                        <OfertasList />
                    </div>
                </div>

            </div>
        );
    }
}

export default OfertasBoard;