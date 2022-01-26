const api = require('./api') // import minha API
const express = require('express')
const axios = require('axios')


const app = express()
app.use(express.json())


app.get("/users", async (req, res) => {
    
    // desestruturando data de axios
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.send({ data })
})



app.get("/clima", (req, res) => {
     return res.send({
        clima: 'temperatura -1'
    })
})



//consumir API do meu backend para outra API ( externa )
app.get("/paisesclimas", async (req, res) => { //função async
    try {
        const { data } = await api.get(`toronto`) // api externa. Se alterar a 'string' com outro nome de CIDADE, retornará o clima dessa CIDADE escolhida

        return res.send({ backend: data }) // data 

    } catch (error) {
        res.send({ error: error.message }) // error
    }
})

app.listen('3001', () => {
    console.log(`conected port 3001`)
})