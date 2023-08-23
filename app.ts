import { Application, Context } from 'https://deno.land/x/oak@v12.6.0/mod.ts';

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = 'Hello World!';
});

await app.listen({ port: 8000 });
