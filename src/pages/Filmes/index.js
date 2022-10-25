import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {Button} from 'reactstrap'

import api from "../../services/api";

///movie/now_playing?api_key=f33873317b34c843e1dff55f674ca510&language=pt-br 

export default function Filmes(){

    const {id} = useParams()
    const [filme, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: 'f33873317b34c843e1dff55f674ca510',
                    language: 'pt-BR',
                    page: 1
                }
            })
            .then(response =>{
                setFilmes(response.data)
                setLoading(false)
            })
            .catch(error => {
                alert('Filme não encontrado')
            })
        }

        loadFilme()
    }, [])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix')

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilm = filmesSalvos.some(filmesSalvos => {
            return filmesSalvos.id === filme.id
        })

        if(hasFilm){
            alert('ESSE FILME JÁ ESTA NA LISTA')
            return
        }
        
        filmesSalvos.push(filme)
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        alert('FILME SALVO COM SUCESSO!')
    }

    if(loading){
        return(
            <div className="container d-flex justify-content-center align-items-center">
                <h1>Carregando...</h1>
            </div>
        )
    }

    return(
        <div className="container d-flex justify-content-center">
            <div className="mt-3 mb-3 col-sm-12 col-md-12 col-lg-8">
                <h2><strong>{filme.title}</strong></h2>
                <img className="img-fluid rounded" src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`}></img>
                <h3><strong>Sinopse</strong></h3>
                <p className="lead">{filme.overview}</p>
                <strong>Avaliação: {filme.vote_average} / 10</strong>
                
                <div>
                    <Button onClick={() => salvarFilme()} color="primary">Salvar</Button>
                    <Button className="m-2" color="danger">
                        <a className="text-decoration-none text-light" href={`https://www.youtube.com/results?search_query=${filme.title}`}>Trailer</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}