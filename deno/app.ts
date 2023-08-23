import {
  Application,
  Middleware,
} from 'https://deno.land/x/oak@v12.6.0/mod.ts';
import todosRoutes from './routes/todos.ts';

const app = new Application();

const middleware: Middleware = async (ctx, next) => {
  console.log('Middleware!');
  await next();
};

app.use(middleware);
app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });
