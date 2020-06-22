import React, {Component} from 'react';
import GeneralTemplete from '../../templates/GeneralTemplate/GeneralTemplate';
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import './home.css';



class Home extends Component {
    constructor() {
      super();
  
      this.state = {
        inputValue: ""
      };
    }
  
    onClick = () => {
      console.log("click");
    };
  
    onChange = () => {
      console.log("click");
    };


    render(){
        return(
            <GeneralTemplete>
                <HomeContent texto =" Buscar"
                        onClick={this.onClick}
                         type = "text"
                          placeholder="O que Você Procura?"
                          value ={this.state.inputValue} 
                          onChange ={this.onChange} 
                          />
            </GeneralTemplete>
        )
    }

}

export default Home;