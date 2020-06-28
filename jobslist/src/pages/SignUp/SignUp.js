import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate"
import SignUpContent from "../../components/organisms/SignUpContent/SignUpContent"
import "./signUp.css"



class SignUp extends Component{
    onFinish = values =>{
        this.props.history.push("/")
    };
    render(){
        const {login, loggedUser} = this.props;
        return(
            <GeneralTemplate loggedUser={loggedUser}>
                <SignUpContent texto="Crie sua Conta" onFinish={this.onFinish} login={login}/>
            </GeneralTemplate>

        )
    }
}


export default SignUp;