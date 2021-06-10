const request = require('supertest');

const app = require('../src/index.js');

test('Deve responder na raiz', () => {
  return request(app)
    .get('/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});
