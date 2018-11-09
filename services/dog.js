

async function getDogInfo(breedname){
	try {
		return { 
			status: 200,
      breed: breedname,
      subBreeds: [],
      images: []
		};
	}	catch(err){
		throw new Error(err.message);
	}
}


module.exports = {
	getDogInfo
};