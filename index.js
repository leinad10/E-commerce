const app = require('./app');
const http = require('http');
const { PORT } = require('./config');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const loginRouter = require('./routes/login');

const server = http.createServer(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


app.use(loginRouter);
app.use(usersRouter);
app.use(productsRouter);

server.listen(PORT, () => {
    console.log(`La aplicacion esta corriendo en el puerto ${PORT}`);
});