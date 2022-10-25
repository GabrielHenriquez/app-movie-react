import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

export default function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        const minhaLista = localStorage.getItem('@primeflix')
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function removeFilm(ID){
        let minhaListaAtt = filmes.filter(filme => {
            return filme.id !== ID
        })

        setFilmes(minhaListaAtt)
        localStorage.setItem('@primeflix', JSON.stringify(minhaListaAtt))
    }

    return(
        <div className="container mt-4">
            <h1 className="display-3 mb-4 text-center">Meus filmes</h1>

            {filmes.length === 0 && 
                <span className="d-flex justify-content-center">Você ainda não possui filmes salvos :(</span>
            }

            {filmes.map(filmes => {
                return(
                    <article key={filmes.id} className='d-flex justify-content-between align-items-center border mb-2 rounded'>
                        <h3>{filmes.title}</h3>
                        <div>
                            <Button color="primary">
                                <Link to={`/Filmes/${filmes.id}`} className='text-decoration-none text-light'>Ver detalhes</Link>
                            </Button>
                            <Button className="m-1" color="danger" onClick={() => removeFilm(filmes.id)}>Excluir</Button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}