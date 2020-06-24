import React, { Component } from "react";
import GeneralTemplete from '../../templates/GeneralTemplate/GeneralTemplate';
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import './home.css';



class Home extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      data: [], 
      filters: ["Todos","Front", "Back", "Design", "Junior", "Pleno", "Senior"]
    };
  }

  componentDidMount = async () => {
    console.log("O componente foi montado")
    const getData = await this.props.data;
    this.setState({ data: getData });
    console.log(this.state.data);

  }

  onClick = async () => {
    const { inputValue } = this.state;
    const { data } = this.props;

    if (inputValue && data.length) {
      const result = await data.filter(item => item.position.toLowerCase().includes(inputValue.toLowerCase()));

      console.log({ result })
      this.setState({ inputValue: "", data: result });

    } else {
      console.log({data})
    }

  };

  onChange = e => {
    const value = e.target.value
    console.log(value);
    this.setState({ inputValue: value });
  };


  handleFilters= (e)=>{
    const {data} = this.props;
    const value = e.target.id.toLowerCase();

    const result = data.filter(item=>{
      switch(value){
        case "todos":
          return data.map(vaga =>vaga);
          default:
            return item.position.toLowerCase().includes(value)
      }
    })

    console.log(value);
  }

  render() {
    const {inputValue, data, filters} = this.state


    return (
      <GeneralTemplete>
        <HomeContent
         texto="Buscar"
          onClick={this.onClick}
          type="text"
          placeholder="O que Você Procura?"
          titulo = "TechJobs"
          value={inputValue}
          data = {data}
          filters= {filters}
          onChange={this.onChange}
          handleFilters={this.handleFilters}
          
        />
      </GeneralTemplete>
    )
  }

}



export default Home;