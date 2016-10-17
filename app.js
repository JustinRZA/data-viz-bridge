import bodyParser from 'koa-bodyparser';
import colors from 'colors';
import Koa from 'koa';
import routes from './routes';
import serve from 'koa-static';
import sockets from './sockets';

const app = new Koa(),
  socket = sockets(app),
  router = routes(socket);

app.use(bodyParser());
app.use(serve(`${__dirname}/public`));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(80, () => {
  console.log('Server running'.green + ' at ' + 'http://localhost:'.grey + '80'.blue);
  //
  // var request = require('request');
  // request({
  //   url: 'http://localhost:3000/receive',
  //   method: 'PUT',
  //   json: {mes: 'heydude'},
  //   function(err, httpResponse, body){
  //     // console.log(err, body);
  //   }
  // });
});

export default app;
