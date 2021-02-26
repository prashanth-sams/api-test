var request = require('supertest').agent('https://interviewtestapi.azurewebsites.net');;
var assert = require('assert');
var validate = require('jsonschema').validate;
var fs = require('fs');


describe('Interview API', function() {
  var status;

  status = {
    ok: 200,
    not_found: 404 
  };

  describe('GET /candidate', function() {
    describe('validate response JSON schema', function() {
      it('should return an array of candidates', function(done) {
        request
          .get('/api/candidate')
          .expect(function(res) {
            var schema = JSON.parse(fs.readFileSync('./test/data/schema.json'));
            assert.equal(validate(res.body, schema).errors.length, 0);
          })
          .expect(status.ok, done);
      });
    });
  });
});