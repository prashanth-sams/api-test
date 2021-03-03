var request = require('supertest').agent('https://interviewtestapi.azurewebsites.net');;
var assert = require('assert').strict;
var validate = require('jsonschema').validate;
var fs = require('fs');
var _ = require('underscore');


describe('Test API', function() {
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

            const latitude = [ 25.357119, 24.058611, 25.259933, 24.863075, 25.087942, 25.21768, 25.18561, 25.089575, 24.487249, 25.089718, 25.088907, 25.199514, 25.197525, 24.418612, 24.421555, 25.266666, 25.800694, 24.184843, 25.322327, 24.466667, 24.2075, 25.276987, 25.392134, 25.0963, 25.068422, 25.068983, 25.088713, 25.173683, 25.069872, 25.184242, 24.332018, 25.134415, 25.22053, 25.308014, 25.267906, 25.11894, 25.0939016825397, 25.0988686188331, 25.1038355551266, 25.10880249142, 25.1137694277134, 25.1187363640069, 24.1237033003003, 24.418612, 24.421555, 25.266666, 24.800694, 24.184843, 24.322327, 24.466667 ];
            const longitude = [ 55.391068, 55.7775, 55.322769, 55.052059, 55.147499, 55.283546, 55.258133, 55.147846, 54.357464, 55.150646, 55.148571, 55.277397, 55.274288, 54.434723, 54.576599, 55.316666, 55.9762, 54.499901, 55.513641, 54.366669, 55.74472, 55.296249, 55.439693, 55.166893, 55.142982, 55.141205, 55.146679, 55.404945, 55.172516, 55.27243, 54.534374, 55.245258, 55.419472, 55.411171, 55.323158, 55.183552, 55.3175031507937, 55.3297002597154, 55.3418973686371, 55.3540944775588, 55.3662915864806, 55.3784886954023, 54.434723, 54.576599, 55.316666, 55.9762, 54.899901, 55.513641, 54.366669, 55.74472 ];

            res.body.map((item, index) => {
              assert.notEqual(item.lat, null)
              assert.equal(item.lat, latitude[index]);
              assert.equal((typeof item.lat), 'number');
              assert.match(item.lat.toString(), /^[+-]?([0-9]*[.])?[0-9]+$/);
              
              assert.notEqual(item.lng, null)
              assert.equal((typeof item.lng), 'number');
              assert.equal(item.lng, longitude[index]);
              assert.match(item.lng.toString(), /^[+-]?([0-9]*[.])?[0-9]+$/);
            });

            const location = [ "Rolla, Sharjah, the UAE", "Jebel Hafeet Mountain Road, UAE", "Al Maktoum Rd, Dubai, United Arab Emirates", "Al Marai Road, Dubai, United Arab Emirates", "The Marina Torch, Dubai, United Arab Emirates", "Emirates Office Tower, Dubai, UAE", "JW Marriott Marquis Dubai, Busines Bay, Dubai, UAE", "Elite Residence, Dubai, United Arab Emirates", "World Trade Center Abu Dhabi, Abu Dhabi, United Arab Emirates", "23 Marina, Dubai, United Arab Emirates", "Marina 101, Dubai Marina, Dubai, United Arab Emirates", "Dubai Mall, Dubai, United Arab Emirates", "Burj Khalifa, Dubai, United Arab Emirates", "Capital Gate, Abu Dhabi, United Arab Emirates", "Khalifa City, Abu Dhabi, United Arab Emirates", "Deira, Dubai, United Arab Emirates", "Ras Al-Khaimah, Ras al Khaimah, United Arab Emirates", "Al Dhafra, Abu Dhabi, United Arab Emirates", "Sharjah, United Arab Emirates", "Abu Dhabi, United Arab Emirates", "Al Ain, United Arab Emirates", "Dubai, United Arab Emirates", "Grand Office Tower Rashidiya, Ajman, the UAE", "The Onyx Tower 2, Dubai City, Dubai, the UAE", "AG Tower, Dubai, United Arab Emirates", "Almas Tower, Dubai, United Arab Emirates", "Princess Tower, Dubai Marina, Dubai, United Arab Emirates", "England Cluster, International City, Dubai, UAE", "Emirates Hills, Dubai, United Arab Emirates", "Business Bay, Dubai, United Arab Emirates", "Mussafah Community, Abu Dhabi, United Arab Emirates", "Al Quoz Industrial Area 2, Dubai, United Arab Emirates", "Mirdif, Dubai, UAE", "Industrial Area 3 - Sharjah - United Arab Emirates", "Al Muraqqabat, Dubai, United Arab Emirates", "Al Sufouh, Dubai, United Arab Emirates", "Rolla, Sharjah, the UAE", "Jebel Hafeet Mountain Road, UAE", "Al Maktoum Rd, Dubai, United Arab Emirates", "Al Marai Road, Dubai, United Arab Emirates", "The Marina Torch, Dubai, United Arab Emirates", "Emirates Office Tower, Dubai, UAE", "JW Marriott Marquis Dubai, Busines Bay, Dubai, UAE", "Elite Residence, Dubai, United Arab Emirates", "World Trade Center Abu Dhabi, Abu Dhabi, United Arab Emirates", "24 Marina, Dubai, United Arab Emirates", "Marina 101, Dubai Marina, Dubai, United Arab Emirates", "Rolla, Sharjah, the UAE", "Jebel Hafeet Mountain Road, UAE", "Al Maktoum Rd, Dubai, United Arab Emirates" ];
            
            let len = 0;
            _.each(res.body, (item) => {
              assert.equal(item.location, location[len]);
              len += 1;
            });

          })
          .expect(status.ok, done);
      });
    });
  });
});
