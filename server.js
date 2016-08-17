import Koa from 'koa';
import parser from 'koa-bodyparser';
import graffiti from '@risingstack/graffiti';
import schema from './schema';

const app = new Koa();

app.use(parser());

// app.use(async (ctx) => {
//   ctx.body = 'Hello World';
// });

app.use(graffiti.koa({
  schema
}));

app.listen(3000);
