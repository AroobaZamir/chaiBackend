const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res)=>{
    res.send(" aroobazamirCom ")

})

app.get("/login", (res, req)=>{
    res.send( "<h1>Plsease login to the TechyKite you tube channel</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
