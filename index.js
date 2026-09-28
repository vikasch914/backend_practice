require('dotenv').config()

const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send("Welcome!!!!")
})

app.get('/logout',(req,res)=>{
    res.send("ThankYou!!!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})