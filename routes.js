var authShit = require('./controllers/auth'),
    user = require('./models/auth.schema.js');

module.exports = (app) => {

  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

  app.get('/dashboard', (req,res)=>{
    res.sendFile('dashboard.html', {root:'./public/html'});
  });

  app.post('/register', authShit.registerUser);
  app.post('/login', authShit.loginUser);
  app.get('/me',authShit.me);
  app.post('/season', authShit.season);
  app.post('/questions', authShit.questions);
}
