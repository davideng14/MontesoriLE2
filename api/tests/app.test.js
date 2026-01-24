const request = require('supertest');
const app = require('../app'); // Adjust path if needed

describe('API Endpoints', () => {
  describe('GET /testAPI', () => {
    it('should return a 200 status and the correct message', async () => {
      const response = await request(app).get('/testAPI');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('API is working properly');
    });
  });
});
