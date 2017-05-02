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
    // authShit        = require('./controllers/auth'),
    routes          = require('./routes')
    PORT            = process.env.PORT || 80,
    app             = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/empyrean');

var sessionsMiddleware = clientSessions({
    cookieName: 'auth-cookie',
    secret: 'DESIGNAPP',
    requestKey: 'session',
    duration: (86400*1000)*7,
    cookie: {
      ephemeral: false,
      httpOnly: true,
      secure: false
    }
})

app.use(
  (sessionsMiddleware),
  express.static('public'),
  bodyParser.json()
);

routes(app);

app.listen(PORT, ()=>{
  console.log(`The server is up and running on port ${PORT}`.america)
});
