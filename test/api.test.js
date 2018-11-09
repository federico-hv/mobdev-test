const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;


describe('GET /api/:breedname', function () {
	it('Should return status 200 when breedname is correct', function (done) {
			this.timeout(5000);
			const breedname = 'hound';
			request(app)
					.get(`/api/hound`)
					.set('Accept', 'application/json')
					.expect('Content-Type', /json/)
					.expect(200, done);
	});

	it('Should return right info when breedname is correct', function (done) {
		this.timeout(5000);
		const breedname = 'hound';
		const expectedSubBreeds = [ 'afghan', 'basset', 'blood', 'english', 'ibizan', 'walker' ];
		request(app)
				.get(`/api/${breedname}`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.end((err, res)=>{
					if (err) return done(err);
					const { body } = res;
					expect(body.status).to.equal(200);
					expect(body.breed).to.equal(breedname);
					expect(body.subBreeds).to.deep.equal(expectedSubBreeds);
					done();
				});
	});

	it('Should return a 500 error when breedname does not exist', function (done) {
		this.timeout(5000);

		request(app)
				.get(`/api/inexistentbreedname`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(500, done);
	});



	it('Should return a 404 error when calling wrong endpoint', function (done) {
		this.timeout(5000);

		request(app)
				.get(`/`)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(404, done);
	});
	
});