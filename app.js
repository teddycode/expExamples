var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//  open unique  sources 
app.use('public', express.static('./public'));


// config  modular enginer
app.engine('html', require('express-art-template'));


// config body-parser ,  to  decode post body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// request  prececss 
app.get('/', function(req, res) {
    res.render('index.html', {
        comments: comments
    });
})

app.get('/post', function(req, res) {
    res.render('post.html');
})

app.post('/post', function(req, res) {
    var comment = req.body;
    comments.dataTime = getNowTime();
    comments.unshift(comment);

    res.redirect('/');
})

// moni shu ju 
var comments = [{
        name: 'zhang san1',
        message: 'Today is good!',
        dataTime: '2018.08.06'
    },
    {
        name: 'zhang san2',
        message: 'Today is good !',
        dataTime: '2018.08.06'
    },
    {
        name: 'zhang san3',
        message: 'Today is good !',
        dataTime: '2018.08.06'
    },
    {
        name: 'zhang san2',
        message: 'Today is good !',
        dataTime: '2018.08.06'
    },
    {
        name: 'zhang san2',
        message: 'Today is good !',
        dataTime: '2018.08.06'
    },
]




//  bind port  for listenning  

app.listen(3000, function() {
    console.log('running the server!');
})



// get current time  

function getNowTime() {
    var data = new Date();
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    var day = data.getDate();
    var hour = data.getHours();
    var minute = data.getMinutes();
    var second = data.getSecond();
    return (year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ' ');
}