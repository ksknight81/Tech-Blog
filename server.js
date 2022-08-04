const exphbs = require('express-handlebars');
const { appendFile } = require('fs');
const hbs = exphbs.create({});

const routes = require('./controllers/');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');