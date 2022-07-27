const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const termData = require('./db/db.json');
const app = express();

console.log(termData);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get('/notes',(req,res) =>{
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get('/api/',(req,res)=>{
    res.json(termData);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

