const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js" )






const app = express();

const items = ['buy food', 'cook food', 'eat food']
const workItems = []



app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.set('view engine', 'ejs');



app.get("/", function(req, res) {
    const day = date.getDate()

    res.render('list', {listTitle: day, newListItems: items})
})

app.post("/", function(req, res){
    console.log(req.body)
    let item = req.body.newItem   
    if(req.body.list === "Work List") {
        workItems.push(item)
        res.redirect("/work")
    } else {
        items.push(item)
        res.redirect("/")
    }
})

app.get('/work', function(req, res) {
    res.render('list', {listTitle:"Work List", newListItems: workItems} )
})

app.post('/work', function(req, res){
    const items = req.body.newItem
    workItems.push(items)
    res.redirect("/work")
})

app.get('/about', function(req, res){
    res.render('about')
})


app.listen(3000, function() {
    console.log('Server started on port 3000')
})