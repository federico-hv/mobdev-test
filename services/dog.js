const axios   = require('axios');
const createError = require('http-errors');
const { 
  SUB_BREEDS_ENDPOINT,
  IMAGES_ENDPOINT
} = require('../config');



async function getDogInfo(breedname){
	try {
		const subBreeds = await axios.get(SUB_BREEDS_ENDPOINT(breedname));
		const images    = await axios.get(IMAGES_ENDPOINT(breedname));
		return { 
			status: 200,
      breed: breedname,
      subBreeds: subBreeds.data.message,
      images: images.data.message
		};
	}	catch(err){
		const { message = 'Request failed with status code 404', status = 9000 } = (err && err.response && err.response.data) ? err.response.data : {};
		throw createError(status, message);
	}
}


module.exports = {
	getDogInfo
};