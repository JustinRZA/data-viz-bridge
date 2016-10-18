import bodyParser from 'koa-bodyparser';
import colors from 'colors';
import Koa from 'koa';
import logger from 'koa-logger';
import routes from './routes';
import serve from 'koa-static';
import sockets from './sockets';

const app = new Koa(),
  socket = sockets(app),
  router = routes(socket);

app.use(logger());
app.use(bodyParser());
app.use(serve(`${__dirname}/public`));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(80, () => {
  console.log('Server running'.green + ' at ' + 'http://localhost:'.grey + '80'.blue);
});

export default app;
