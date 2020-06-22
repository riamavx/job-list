import React from 'react'; 
import {ReactComponent as Logo} from "../../imagem/logo.svg" // transforma em um componente e deixa mais limpo o codigo, só funciona em svg
import './generalTemplate.css';



const GeneralTemplate = ({children})=>{
    return(
        <div className ="generalTemplate__container">
            
            <nav>
                <div>
                    <a href="/">
                        <Logo />

                    </a>

                    <ul>
                        <a href="/">
                            <li>Home</li>
                        </a>

                        <a href="/login">
                            <li>Entrar</li>
                        </a>

                        <a href="/cadastro">
                            <li>Cadastro</li>
                        </a>
                    </ul>
                </div>

            </nav>
            {children}

        </div>
    )

}








export default GeneralTemplate;