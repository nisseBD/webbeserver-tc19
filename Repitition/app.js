const express = require('express')
const databaseModule = require('./databaseModule')
const app = express()
const port = 5555

app.use(express.json())
app.use(express.urlencoded())
const clientDir = __dirname + "\\client\\"

app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  res.render('index.ejs', {name:'Nils'})
})

app.post('/sendMessage', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.message)
    databaseModule.saveData(req.body.name,req.body.message)
  res.redirect("success.html")
})

app.listen(port, () => console.log(`Example app listening on port port!`))




