const express = require('express');
const app =express()
const porta = 8081
app.use(express.json())
const cors = require('cors');

app.use(cors())

app.get("/",(req,res)=>{

    res.json([
        {
            nome:"Mateus"
        },
        {
            nome:"Tiago"
        },
        {
            nome:"Maria"
        }
    ])
})
app.listen(porta,()=>{

console.log("Servidor Rodando na porta :"+porta)
    
})