
// Getting the div's to display content
let displayData = document.getElementsByClassName('displayData');
let temp = document.getElementById('temp');
let weather = document.getElementById('weather');
let humidity = document.getElementById('humidity');
let precip = document.getElementById('precip');
let city = document.getElementById('city');
let province = document.getElementById('province');
let country = document.getElementById('country');
let lastUpdate = document.getElementById('lastUpdate');
let feelsLike = document.getElementById('feelsLike');
let img = document.querySelector('img');
function search() {
    try{
        let search = document.getElementById('searchTerm').value;
        fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=MPDQXDPQP82TXTNW56T7VBYRQ`,{mode : 'cors'})
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                temp.textContent = response.currentConditions.temp;
                weather.textContent = response.currentConditions.conditions;
                humidity.textContent = response.currentConditions.humidity;
                precip.textContent = response.currentConditions.precip;
                feelsLike.textContent = response.currentConditions.feelslike;
                lastUpdate.textContent = response.currentConditions.datetime;
                if (weather.textContent.includes('Rain')){
                    img.src = "https://cdn.donmai.us/original/16/7b/__original_drawn_by_lennsan__167bafe644e9a2af464a7664e26b88f7.gif";
                }
                else{
                    img.src = "https://cdn.donmai.us/original/f5/33/__original_drawn_by_lennsan__f53336607ee8c6478f25d2665d7d5c3b.gif";
                }
                weatherContent.textContent = "Weather"
                precipContent.textContent = "Precipitation"
                humidityContent.textContent = "Humidity"
                cityContent.textContent = "City"
                countryContent.textContent = "Country"
                provinceContent.textContent = "Province"
                feelsLikeContent.textContent = "Feels like"
                lastUpdateContent.textContent = "Last updated"
                let sortCity = response.resolvedAddress;
                let sepCity = sortCity.split(", ");
                city.textContent = sepCity[0];
                province.textContent = sepCity[1];
                country.textContent = sepCity[2];
                })
    }
    catch(err){
        temp.textContent = err;
        img.src = "https://cdn.donmai.us/original/23/74/__original_drawn_by_lennsan__23744c129612bd1b99b580376512744e.gif"
    }

}

