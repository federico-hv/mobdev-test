const axios   = require('axios');

async function getDogInfo(breedname){
	try {

		const subBreeds = await axios.get(`https://dog.ceo/api/breed/${breedname}/list`);
		const images    = await axios.get(`https://dog.ceo/api/breed/${breedname}/images`);

		return { 
			status: 200,
      breed: breedname,
      subBreeds: subBreeds.data.message,
      images: images.data.message
		};
	}	catch(err){
		const { message = 'Request failed with status code 404' } = (err && err.response && err.response.data) ? err.response.data : {};
		throw new Error(message);
	}
}


module.exports = {
	getDogInfo
};