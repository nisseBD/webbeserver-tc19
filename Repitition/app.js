const express = require('express')
const app = express()
const port = 5555

app.use(express.json())
app.use(express.urlencoded())


const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/bajs', (req, res) => {
    res.sendFile(clientDir + 'main_style.css')
})

app.get('/korv', (req, res) => {
  res.sendFile(clientDir + 'balle.jpg')
})

app.get('/great', (req, res) => {
    res.sendFile(clientDir + 'success.html')
  })


app.post('/sendMessage', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.message)
    module3.saveData(MessagePost,req.body.name,req.body.message)

  res.redirect("/great")
})

app.listen(port, () => console.log(`Example app listening on port port!`))

const module3 = require("test");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webbserver1', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("We are connected");
});

const messagePostSchema = new mongoose.Schema({
    name: String,
    message: String
});

const MessagePost = mongoose.model('MessagePost', messagePostSchema);

