var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fewestGuesses = null;

app.use(bodyParser.json())

app.use(express.static(__dirname+ '/build/'));

app.get('/fewest-guesses', function (req, res) {
res.json({
fewestGuesses: fewestGuesses
});
})

app.post('/fewest-guesses/:userGuesses', function (req, res) {
let userGuesses = parseInt(req.params.userGuesses);
if( !fewestGuesses || userGuesses > fewestGuesses){
fewestGuesses = userGuesses;
}
res.json({
fewestGuesses: fewestGuesses
});
})


app.listen(3000, function () {
console.log('Example app listening on port 3000!')
})