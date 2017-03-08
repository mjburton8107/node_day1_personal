var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// process.env.port will have node go and find an open port
var port = process.env.port || 3000;

//use it for express to work in order to protect the back end
app.use(bodyParser.json());

var bookDB = {
  0: {
    name: 'grapes of wrath'
  },
  1: {
    name: '1984'
  },
  2: {
    name: 'house of leaves'
  }
}


// req is short for request req.query; req.body; req.param
// res is short for response res.error; res.send

app.get('/:id', function(req, res){
  const param = req.params.id
  if(!bookDB[param]){
    res.send('404 book not found');
  } else
    res.send(bookDB[param].name);
})

app.put('/new/:id', function(req, res){
  const newBookId = req.params.id;
  bookDB[newBookId] = req.body;
  res.send(bookDB);
})


app.listen(port, function(){
  console.log('now listening on port ' + port)
})
