/**
 * Created by sakshi on 14/2/17.
 */

const mysql = require('mysql');

let dbconf = {
    host: 'localhost',
    user: 'newuser',
    password: '**',
    database: 'ecomdb'
};

function addNewTask (item,p, done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "INSERT INTO ecom SET ?",
        {item: item, price: p},
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            conn.end();
        }
    );
}

function fetchTasks(done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
console.log("fetched");

    conn.query(
        "SELECT * FROM ecom",
        function (err, result, fields) {
         //   if (err) throw err;
            done(result);
            conn.end();
        }
    );
}

function setTaskState(item, p, done) {console.log("insiseupdatestate");

    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "UPDATE ecom SET ? WHERE ?",
        [ {price: p},{item: item}],
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            console.log("finished");
            conn.end();
        }
    );
}

function setdeleteState(item, p, done) {
    console.log("insisedeletestate");
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "DELETE FROM ecom  WHERE ?",
        [ {item: item},{price: p}],
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            console.log("finished");
            conn.end();
        }
    );
}

module.exports = {
    fetchTasks, addNewTask, setTaskState,setdeleteState
};
