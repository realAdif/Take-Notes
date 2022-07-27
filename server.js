const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.port || 3001;
const termData = require('./db/db.json');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// get notes
app.get('/api/notes',(req,res)=>{
    res.json(termData);
});

// add notes
app.post('/api/notes',(req,res) =>{
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    noteList.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(termData);
    console.log("POST");
});
app.get('/api/notes',(req,res)=>{
    res.json(termData);
});
// remove notes 

//when user clicks on one of the notes it gets the notes 

//get the index.html
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
//get notes.html
app.get('/notes',(req,res) =>{
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
// if the users puts in any other parts it will take them to the index.html
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
// the listen URL
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

