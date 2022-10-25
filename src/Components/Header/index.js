import {Link} from 'react-router-dom'
import {Nav, NavItem} from 'reactstrap'

import './style.css'

export default function Header(){
    return(
        <header className="bg-dark fixed-top">
            <div className='container text-light d-flex justify-content-between align-items-center'>
                <Link className='text-light logo' to='/'><h1>Prime Flix</h1></Link>

                <Nav>
                    <NavItem>
                        <Link className='linkHeader' to='/Favoritos'>Meus filmes</Link>
                    </NavItem>
                </Nav>
            </div>
        </header>
    )
}                                                           