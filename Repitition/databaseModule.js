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

let newMessagePost = new MessagePost({
    name: "Nils",
    message: "Hej hur mår du?"
});

newMessagePost.save()