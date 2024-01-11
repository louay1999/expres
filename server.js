
const express = require('express')

const app = express()
const time = require("./middleware/time-verification")
const port = 3000
const path = require ("path")

//app.set("view engine","pug" )

app.use(express.static(path.join(__dirname, 'public')));
app.use(time)


app.get('/', (req, res) => {
  res.render('home.pug')


})
app.get('/contact',(req, res) => {
    res.render('contact.pug')
  
})
app.get('/services',(req, res) => {
    res.render('services.pug')
  
})
app.get('/welcome',(req,res)=>{
    res.sendFile('index.html',{root:__dirname+"/public"}
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
