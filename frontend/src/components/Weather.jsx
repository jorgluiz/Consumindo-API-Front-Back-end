import React, { Component } from "react"
import axios from "axios"
import "./Weather.css"

export default class Weather extends Component {

    constructor() {
        super()
        this.state = {
            weather: "Not yet gotten"
        }
    }

    //consumir API fake do backend  ( site: jsonplaceholder) 
    usuarios = () => {
        axios.get("/users")
          .then((res) => console.log(res.data.data))
    }
    

    //consumindo API do backend
    handleButtonClick = () => {
       try {
        axios.get("/paisesclimas").then(res =>  {
            this.setState({ weather: res.data.backend.current.temperature })
        })
       } catch (error) {
           console.error(error)
       }
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.usuarios}>Usuários</button>

                <button onClick={this.handleButtonClick}>Get weather in toronto</button>
                <h1> The weather in toronto is: {this.state.weather}</h1>
            </div>
        )
    }
}


// const [weather, setWeather] = useState('')


//    async function componentDidMount(){
//        const dados = await axios.get("/toronto")
//        const d = await dados.data
//        const backend = await d.backend
//        const temp = await backend.current.temperature
//        console.log(temp)
//    }

//    componentDidMount()
