const express = require('express');
require('dotenv').config();
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
const logger = require('morgan');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

let publicPath = path.join(__dirname, '/public');

app.use(logger('dev'));

app.use(express.static(publicPath));

// app.get('/', function(reg, res){
//     res.render('index');
// });
let data = {
    title: 'NB'
}

const index = require('./routes/index');

app.use('/', index);
// app.get('/', function(reg, res){
//     res.render('index', data);
//     // next();
// });

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res){
    res.send('hello world');
});

// Only works on 3000 regardless of what I set environment port to or how I set
// [value] in app.set('port', [value]).
// app.listen(3000);
app.listen(app.get('port'));
// let http = require('http');

// http.get('http://nbrpro.me/nbrpro_handler/search/s_n_1?devuid=D1BF72E3-AE3A-4777-8464-A6AB695C1310&fcntry=+966&nid=550880999',(res) => {
//     let data = '';
//     res.on('data', (dat) => {
//         data += dat;
//     });
//     res.on('end', () => {
//         console.log(data);
//     });
// });
// console.log('k10')

// let server = http.createServer(func)

// function func(reg, res){

//     let responseHeader = {
//         'Content-Type': 'text/plain'
//     }
//     res.writeHead(200, responseHeader);
//     res.write('k10');
//     res.end();
// }
// server.listen(8080, function(){
//     let dir = __dirname;
//     console.log(dir);
// })

/*

<% for(let i = 0; i < t.length; i ++) {%>
                    <tr>
                        <td><%= t[i]['Name']%></td>
                    </tr>
                <%}%>

*/