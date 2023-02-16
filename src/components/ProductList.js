import React, { useState, useEffect, useRef } from 'react';
import TopBar from './TopBar';


function ProductList(){

	const [products, setProducts] = useState([])


	const fetchProducts = async () => {
		const response = await fetch(`http://localhost:8000/api/products`)
		const info = await response.json()
		console.log(info)
		if (info.count > 0) {
			setProducts(info.products)
			
		}
		else {
			setProducts([])
		}
	}
	//console.log(products)
	

	
	useEffect(() => {
		fetchProducts()
	}, [])


	
	return(
		<div className="container-fluid">
					<div className="row">
						<div className="col-12">
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={`http://localhost:8000/images/products/${product.img1}`}
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.description}</p>
												<p>${product.price}</p>

											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				:

		</div>
	)
}

export default ProductList;