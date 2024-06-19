// src/app.test.ts
import request from 'supertest';
import app from './app';

describe('GET /', () => {
  it('should respond with "Typescript + Node.js + Express Server"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Typescript + Node.js + Express Server');
  });
});
