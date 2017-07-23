/**
 * Created by sakshi on 14/2/17.
 */

/**
 * Created by championswimmer on 12/02/17.
 */

const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/ecom/all', (req, res) => {
    db.fetchTasks(function (result) {
    console.log(result);
    res.send(result)
});

});

app.post('/ecom/add', (req, res) => {

    console.log(req.body.item + " " + req.body.price);
    db.addNewTask(req.body.item,req.body.price, function (result) {
    res.send(result);
})
});

app.post('/ecom/edit', (req, res) => {

    console.log(req.body.item + " " + req.body.price);
    db.setTaskState(req.body.item, req.body.price,
    function(result) {
        res.send(result)
    }
)
});


app.post('/ecom/delete', (req, res) => {

    console.log(req.body.item + " " + req.body.price);
    db.setdeleteState(req.body.item, req.body.price,
        function(result) {
            res.send(result)
        }
    )
});


app.use('/', express.static(__dirname + "/public_html"));

app.listen(2357, () => {console.log('Started on 2357')});
