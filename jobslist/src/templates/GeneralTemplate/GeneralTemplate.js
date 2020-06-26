import React from 'react';
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../imagem/logo.svg" // transforma em um componente e deixa mais limpo o codigo, só funciona em svg
import './generalTemplate.css';



const GeneralTemplate = ({ children, loggedUser, logout }) => {
    return (
        <div className="generalTemplate__container">

            <nav>
                <div>
                    <Link to="/">
                        <Logo />

                    </Link>

                    <ul>
                        {loggedUser ? (
                            <React.Fragment>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="/" onClick={logout}>
                                    <li>Sair</li>
                                </Link>
                            </React.Fragment>

                        ) : (

                                <React.Fragment>
                                    <Link to="/">
                                        <li>Home</li>
                                    </Link>

                                    <Link to="/login">
                                        <li>Entrar</li>
                                    </Link>

                                    <Link to="/signup">
                                        <li>Cadastro</li>
                                    </Link>
                                </React.Fragment>
                            )}
                    </ul>
                </div>

            </nav>
            {children}

        </div>
    )

}








export default GeneralTemplate;