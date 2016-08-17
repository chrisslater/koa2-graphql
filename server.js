import Koa from 'koa';
import parser from 'koa-bodyparser';
import Router from 'koa-router'; // koa-router@7.x
import convert from 'koa-convert';
import graphqlHTTP from 'koa-graphql';

import graffiti from '@risingstack/graffiti';
import schema from './schema';

const app = new Koa();
const router = new Router();

app.use(parser());

// app.use(async (ctx) => {
//   ctx.body = 'Hello World';
// });

app.use(convert(graffiti.koa({
  schema
})));

router.all('/graphql', convert(graphqlHTTP({
  schema,
  graphiql: true
})));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
