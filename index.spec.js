const request = require('supertest');
const app = require('./app');

describe('GET /', function(){
    test('responds with 200 on success', function(done) {
        request(app)
            .get('/')
            .expect(200,done);
    })
})

