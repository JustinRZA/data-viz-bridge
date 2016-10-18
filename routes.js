import fs from 'fs';
import Router from 'koa-router';

const panda = fs.readFileSync('./data-panda.html', 'utf-8');
const router = new Router();

function routes (socket) {
  router.get('/', async ctx => {
    ctx.body = panda;
  });

  router.put('/receive', async ctx => {
    socket.broadcast('consume', ctx.request.body);
    console.log('  →'.grey, '⨀ '.green, 'consume');
    ctx.body = panda;
  });

  return router;
}

export default routes;
