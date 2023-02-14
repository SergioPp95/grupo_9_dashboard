import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContenWrapper';
import CategoriesInDB from './CategoriesInDB';
import LastProductInDB from './LastProductInDB';
import ContentRowData from './ContentRowData';
import NotFound from './NotFound';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    const [users, setUsers] = useState()
    const [infoProducts, setInfoProducts] = useState()
    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8000/api/users')
        const info = await response.json()
        //console.log(info)
        setUsers(info)
    }
    const fetchProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products')
        const info = await response.json()
        //console.log(info)
        setInfoProducts(info)
    }
    useEffect(() => {
       fetchUsers()
       fetchProducts()
    }, [])
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="All Star Tech"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - AllStar Tech</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductList">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Products</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowData">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
                </ul>
                <Switch>
                <Route exact path="/">
                    <ContentWrapper infoUsers={users} infoProducts={infoProducts}/>
                </Route>
                <Route path="/CategoriesInDB">
                    <CategoriesInDB infoProducts={infoProducts}/>
                </Route>
                <Route path="/LastProductInDB">
                    <LastProductInDB infoProducts={infoProducts}/>
                </Route>
                <Route path="/ContentRowData">
                    <ContentRowData infoUsers={users} infoProducts={infoProducts} />
                </Route>
                <Route path="/ProductList">
                    <ProductList />
                </Route>
                <Route component={NotFound} />
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;