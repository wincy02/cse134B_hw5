class weather extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});

        this.shadowRoot.innerHTML=``;

    }

    connectedCallback(){
        this.fetchWeatherData();
    }

    fetchWeatherData(){
        const apiEndpoint='https://api.weather.gov/points/32.842674,-117.257767';
        fetch(apiEndpoint)
            .then(response=>response.json())
            .then(data=>this.updateWeather(data))
            .catch(error=>console.error('error', error));

    }

    updateWeather(data){
        const temp_element=this.shadowRoot.getElementById('temperature');
        const conditionsTextElement = this.shadowRoot.getElementById('conditions-text');
        const conditionsIconElement = this.shadowRoot.getElementById('conditions-icon');

        const temperature = data.properties.periods[0].temperature;
        const conditionsCode = data.properties.periods[0].shortForecast;
        const conditionsText = data.properties.periods[0].detailedForecast;

        const conditionsIcon = this.mapConditionsIcon(conditionsCode);

        temp_element.textContent = `Temperature: ${temperature} °C`;
        conditionsTextElement.textContent = `Conditions: ${conditionsText}`;
        conditionsIconElement.src = `weather_icons/${conditionsIcon}.png`;

        

    }
    mapConditionsIcon(conditionsCode) {
        const iconMapping = {
            "Fair/clear": "skc",
            "A few clouds": "few",
            "Partly cloudy": "sct",
            "Mostly cloudy": "bkn",
            "Overcast": "ovc",
            "Fair/clear and windy":"wind_skc",
            "A few clouds and windy":"wind_few",
            "Partly cloudy and windy":"wind_sct",
            "Mostly cloudy and windy" :"wind_bkn",
            "Overcast and windy":"wind_ovc",
            "Snow":"snow",
            "Rain/snow":"rain_snow",
            "Rain/sleet":"rain_sleet",
            "Snow/sleet":"snow_sleet",
            "Freezing rain":"fzra",
            "Rain/freezing rain":"rain_fzra",
            "Freezing rain/snow":"snow_fzra",
            "Sleet":"sleet",
            "Rain":"rain",
            "Rain showers(high cloud cover)":"rain_showers",
            "Rain showers(low cloud cover)":"rain_showers_hi",
            "Thunderstorm(high cloud cover)":"tsra",
            "Thunderstorm(medium cloud cover)":"tsra_sct",
            "Thunderstorm(low cloud cover":"tsra_hi",
            "Tornado":"tornado",
            "Hurricane":"hurricane",
            "Tropical storm conditions":"tropical_storm",
            "Dust":"dust",
            "Smoke":"smoke",
            "Haze":"haze",
            "Hot":"hot",
            "Cold":"cold",
            "Blizzard":"blizzard",
            "Fog/mist":"fog"
            
        };

        return iconMapping[conditionsCode] || "default";
    }
}

customElements.define('weather', WeatherWidget);