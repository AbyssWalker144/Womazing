import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import AboutBrand from "../pages/AboutBrand/AboutBrand";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import CompleteOrder from "../pages/CompleteOrder/CompleteOrder";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ShopFiltered from '../pages/Shop/ShopFiltered';


const AppRouter = () => {

    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <Fragment>
            <Routes>
                {/*<Route path='*' element={<Navigate replace to="/" />} />*/}
                <Route path='*' element={<NotFound />} />

                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:category" element={<ShopFiltered />} />

                <Route path="/about" element={<AboutBrand />} />
                <Route path="/contacts" element={<Contacts />} />

                <Route path="/shop/:category/:id" element={<Product />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/complete-order" element={<CompleteOrder />} />
            </Routes>
        </Fragment>
    );
};

export default AppRouter;