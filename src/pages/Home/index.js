/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { } from 'reactstrap'

import './style.css'
import api from "../../services/api";

// URL da API : /movie/now_playing?api_key=f33873317b34c843e1dff55f674ca510&language=pt-br 

export default function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'f33873317b34c843e1dff55f674ca510',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilmes()
    }, [])

    if(loading){
        return(
            <div className="d-flex justify-content-center align-items-center">
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div className="container bg">
            <div className="lista-filmes">
                {filmes.map(filme => {
                    return (
                        <article className="pt-3" key={filme.id}>
                            <h3 className="text-center"><strong>{filme.title}</strong></h3>
                            <img className="img-fluid rounded" src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`}></img>
                            <Link className="linkFilm rounded" to={`/Filmes/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}