
const API_URL = "https://dog.ceo/api";

module.exports = {
	SUB_BREEDS_ENDPOINT: (breedname)=> `${API_URL}/breed/${breedname}/list`,
	IMAGES_ENDPOINT: (breedname) => `${API_URL}/breed/${breedname}/images`
};