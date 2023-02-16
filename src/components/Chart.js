import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]



function Chart ({infoProducts}){

    
    if(infoProducts != undefined) {
        console.log(infoProducts.products)
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Descripcion</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Descripcion</th>
                                </tr>
                            </tfoot>
                            <tbody>
                            {
                                infoProducts.products.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>
                                })
                                }
    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    
        )

    } else {
        return <h2>Cargando...</h2>
    }
}

export default Chart;