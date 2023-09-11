const btnGetWeather = document.getElementById('btnGetWeather')
const citySearch = document.getElementById('city')
let cityFound = {}

btnGetWeather.addEventListener('click', () => {
    console.log('@@ city => ', citySearch)
    if(citySearch.value.trim().length > 0){
        getWeather(citySearch.value)
    } else {
        alert(' Cuidad Vacia ')
        citySearch.focus()
    }
})


const newData = () => {
    const city = document.getElementById('newCity')
    city.textContent = cityFound.city

    const wind = document.getElementById('newViento')
    wind.textContent = cityFound.wind 

    const temp = document.getElementById('newTemp')
    temp.textContent = cityFound.temp + '°C'

    const humidity = document.getElementById('newHume')
    humidity.textContent = cityFound.humidity

    const last_update = document.getElementById('newHora')
    last_update.textContent = cityFound.last_update
} 

