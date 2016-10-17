import IO from 'koa-socket';

const io = new IO();

export default function sockets (app) {
  io.attach(app);

  // io.on('consume', (ctx, data) => {
  //   console.log('join event fired', data);
  // });

  return io;
};
