const request = require('supertest');
const app = require('./app');

describe('GET /', function(){
    test('responds with 200 on success', function(done) {
        request(app)
            .get('/')
            .expect(200,done);
    })
    test('responds with 404 when file not found',function(done){
        request(app)
            .get('/random')
            .except(404,done); 
    })
    test('error 418 im a teapot', function(done){
        request(app)
        .get('/hack')
        .expect(418,done);
    })
    test('responds with json object',function(done){
        request(app)
            .get('/city')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(done);
    })
    test('retrieves a time by city name', function(done){
        request(app)
            .get('city/london')
            .expect(200)
            .expect({id: , name: London, timeZone: ,time: },done)
    })
    test('responds to delete / with status 204', (done) => {
        request(app)
            .delete('/city/')
            .expect(204, done);
    });
})

