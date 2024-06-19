import request from 'supertest';
import { app, server } from './app';

afterAll(async () => {
    await server.close();
});
describe('GET /', () => {
    it('should respond with "Typescript + Node.js + Express Server"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Typescript + Node.js + Express Server');
    });
});
