const nock = require('nock');
const expect = require('chai').expect;
const getDogInfo = require('../services').dogService.getDogInfo;
const { SUB_BREEDS_ENDPOINT, IMAGES_ENDPOINT } = require('../config');




const imagesResponse = {
  message: [
    'imageOne',
    'imageTwo'
  ]
};

const listResponse = {
  message: [
    'subBreedOne',
    'subBreedTwo'
  ]
};

describe('Dog Service Test', () => {

  beforeEach(() => {
		const breedname = 'hound';
		const houndSubBreedsUrl = SUB_BREEDS_ENDPOINT(breedname);
		const houndImagesUrl    = IMAGES_ENDPOINT(breedname);
		
    nock('https://dog.ceo/api')
      .get('/breed/hound/images')
      .reply(200, imagesResponse);
      
    nock('https://dog.ceo/api')
      .get('/breed/hound/list')
      .reply(200, listResponse);
  });
  
  it('Get a dog data by breedname', () => {
    const expectedSubBreeds = [ 'subBreedOne', 'subBreedTwo' ];
    const expectedImages    = [ 'imageOne', 'imageTwo' ];

    getDogInfo('hound')
      .then(response => {
        expect(typeof response).to.equal('object');
        expect(response.breed).to.equal('hound');
        expect(response.subBreeds).to.deep.equal(expectedSubBreeds);
        expect(response.images).to.deep.equal(expectedImages);
      })
  });

}); 