import IO from 'koa-socket';

const io = new IO();

export default function sockets (app) {
  io.attach(app);

  return io;
};
