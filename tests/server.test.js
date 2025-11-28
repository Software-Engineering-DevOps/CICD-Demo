const request = require('supertest');
const app = require('../server');

describe('API Endpoint Test', () => {
  it('GET /api/status should return success', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
  });
});
