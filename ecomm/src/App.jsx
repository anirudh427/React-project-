import React from 'react';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './pages/Products';
import Protected from './components/Protected';
import AdminHome from './pages/AdminHome';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/products' element={<Protected><Products/></Protected>}></Route>
                <Route path='/admin' element={<Protected><AdminHome/></Protected>}></Route>
                <Route path='/cart' element={<Protected><Cart/></Protected>}></Route>
                <Route path='/checkout' element={<Protected><Checkout/></Protected>}></Route>
            </Routes>
        </BrowserRouter>
     )
}

export default App