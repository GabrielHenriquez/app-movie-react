import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Header from "./Components/Header";
import Favoritos from "./pages/Favoritos";

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Filmes/:id' element={<Filmes/>} />
                <Route path='/Favoritos' element={<Favoritos/>} />
            </Routes>
        </BrowserRouter>
    )
}