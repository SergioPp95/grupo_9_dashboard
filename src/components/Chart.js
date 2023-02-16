import React from 'react';
import ChartRow from './ChartRow';





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
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
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