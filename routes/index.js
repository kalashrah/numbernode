const express = require('express');
// const router = express.Router();
const router = express.Router();

var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://rdod.live/contacts_api/api.php?getName=true&phone=550880999',
    'headers': {
    }
};

var resData;
request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    resData = JSON.parse(response.body);
    // console.log(typeof(resData['t'][0]['Name']));
});

// var name = resData['t'][0]['Name'];

// let data = {
//     rsd: `${name}`
// }
router.get('/', function(reg, res){
    res.render('index', resData);

    // next();
    // res.send('_!_');
});

module.exports = router;


