import request from 'supertest';
import app from './app';
import { describe, test, expect } from '@jest/globals';

describe('Health check endpoint', () => {
  test('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Server is healthy!');
  });
});
