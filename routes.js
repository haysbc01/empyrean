var authShit = require('./controllers/auth'),
    user = require('./models/auth.schema.js');

module.exports = (app) => {

  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

  app.post('/register', authShit.registerUser);
}
