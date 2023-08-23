import { serveListener } from 'https://deno.land/std@0.199.0/http/server.ts';

const listener = Deno.listen({ port: 3000 });
console.log('Server is running on http://localhost:3000/');

for await (const conn of listener) {
  serveConnection(conn);
}

async function serveConnection(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const { request } = requestEvent;
    requestEvent.respondWith(new Response('Hello World\n'));
  }
}
