import React from 'react';


function LastProductInDB({infoProducts}){
    if(infoProducts != undefined){
        let product = infoProducts.products[infoProducts.products.length-1]
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:8000/images/products/${product.img1}`} alt={product.img1}    />
                        </div>
                        <p>{product.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return <h2>Cargando...</h2>
    } 
}

export default LastProductInDB;