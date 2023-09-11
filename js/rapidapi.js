const getWeather = async(city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '13159fb854msh85c1ef4b26f96d6p1de839jsn2664b7ff5bcb',
			'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if(result.success){
			cityFound= result.data 
			newData()
			//newViento()
			console.log('@@@ cityFound', cityFound)
		} else {
			alert('City was not found ')
		} 
		//console.log(result);
	} catch (error) {
		console.error(error);
	}
}
