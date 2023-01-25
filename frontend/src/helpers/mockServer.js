import { createServer, Response } from 'miragejs';

export function createMockServer() {
  createServer({
    routes() {
      this.namespace = '/api';
      this.nextUserId = 3;

      this.get('/users', () => ({
        results: [
          { id: 1, name: 'Alice', email: 'alice@inter.net' },
          { id: 2, name: 'Bob', email: 'bob@inter.net' },
        ],
      }));

      this.post('/users', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        if (data.name === 'error') {
          return new Response(400, {}, { message: 'Invalid name' });
        }

        const id = this.nextUserId;
        this.nextUserId += 1;
        return { id, ...data };
      });

      this.delete('/users/:id', (schema, request) => ({
        id: request.params.id,
      }));
    },
  });
}
