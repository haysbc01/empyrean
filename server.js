var express         = require('express'),
    morgan          = require('morgan')('dev'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    sockets         = require('socket.io'),
    colors          = require('colors'),
    multiparty      = require('connect-multiparty'),
    fs              = require('fs'),
    cors            = require('cors'),
    clientSessions  = require('client-sessions'),
    authShit        = require('./controllers/auth'),
    // routes          = require('./routes')
    PORT            = 4000,
    app             = express();

mongoose.connect('mongodb://localhost/empyrean')

app.use(
  express.static('public'),
  bodyParser.json()
);

app.get('/', (req, res)=>{
  res.sendFile('index.html', {root : './public/html'});
});

app.post('/register', authShit.registerUser);

// routes(app);

app.listen(PORT, ()=>{
  console.log(`The server is up and running on port ${PORT}`.america)
});
