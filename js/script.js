function updatedata(country){
    console.log(country)
    const elem = document.querySelector(".row")
    const card = `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
    <div class="card h-100">
    <header class="header">
          <div class="card-header"><b>${country.name.common}</b></div>
      </header>
      <img src="${country.flags.png}" class="card-img-top" alt="...">
      
      <div class="card-body">
        <div class="card-text"><b>Region:</b> ${country.region}<br><b>Capital:</b> ${country.capital}<br><b>Population:</b> ${country.population}</div><br>
        <button type="button" class="weather" onclick="weather(${country.latlng[0]},${country.latlng[1]})">Click for Weather</button>
      </div>
      
    </div>
    </div>`
    
    elem.insertAdjacentHTML("beforeend",card)
}

weather= async(lat,lon) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1a6c32170d1dee969be2ec045c06c157`)

const result= await data.json()

alert(`       Temperature: ${result.main.temp}°
       Pressure: ${result.main.pressure} atm
       Sky: ${result.weather[0].description}
       Wind speed: ${result.wind.speed} m/s
       Lattitude & Longitude: ${lat} & ${lon}`)
       console.log(result)
}

const getData = async ()=>{
    let countryData = await fetch("https://restcountries.com/v3.1/all")
    .then((data)=>data.json())
    .then((data) => data)
    .catch(x=> console.warn(x));
    for(let i=0;i<countryData.length;i++){
        updatedata(countryData[i])
    }
}
getData();
    


