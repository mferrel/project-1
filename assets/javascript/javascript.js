// var zipCode ='48182'
// var apiKey = '2023ba5c12854dcdc1d6fbe23996eaaf';
var userZip = 48182;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip="+ userZip + "&appid=2023ba5c12854dcdc1d6fbe23996eaaf";
// var queryURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}appid=${apiKEY}`// template literals/strings 


var pokemonApiWeatherTypes = ["Clear", "Cloudy", "Fog", "Partly Cloudy", "Rain", "Snow", "Sunny", "Windy"];
var clearWeatherTypes = 800;
var cloudyWeatherTypes = [803, 804];
var fogWeatherTypes = [701, 711, 721, 731, 741, 751, 761, 762];
var partlyCloudyWeatherTypes = [801, 802];
var rainWeatherTypes = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
var snowWeatherTypes = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
var sunnyWeatherTypes = 800;
var windyWeatherTypes = [771, 781];

let weatherBackgroundImg = $("#weathercard");

var weatherType = {
    id: 0, //numeric id from weather api
    pokemonWeatherType: '', // assign this based on what category you want it to be a part of,
}


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    var weatherApiIdType = response.weather[0].id;
    console.log('weather api type', weatherApiIdType)
    console.log('clear api type', clearWeatherTypes, sunnyWeatherTypes)

    if (weatherApiIdType === clearWeatherTypes || weatherApiIdType === sunnyWeatherTypes) {
        weatherType.id = weatherApiIdType
        //SHOULD I FIGURE OUT HOW THIS SHOULD SAY SUNNY TOO?
        weatherType.pokemonWeatherType = "Clear"
        weatherBackgroundImg.attr('src', 'assets/images/clear.jpg')
        currentInGameWeather = 
        console.log('im in clear weather')
        
       

    }

    else if (cloudyWeatherTypes.includes(weatherApiIdType)) {
        console.log('im in cloudy weather')
        weatherType.id = weatherApiIdType
        weatherType.pokemonWeatherType = "Cloudy"
        weatherBackgroundImg.attr('src', 'assets/images/cloudyovercast.jpg')

        
    }

    else if (fogWeatherTypes.includes(weatherApiIdType)) {
        console.log('im in fog')
        console.log('weatherApiIdType', weatherApiIdType)
        weatherType.id = weatherApiIdType
        weatherType.pokemonWeatherType = "Fog"
        weatherBackgroundImg.attr('src', 'assets/images/fog.jpg')
    }

    else if (partlyCloudyWeatherTypes.includes(weatherApiIdType)) {
        console.log('im in partly cloudy weather')
        console.log('weatherApiIdType', weatherApiIdType)
        weatherType.id = weatherApiIdType
        weatherType.pokemonWeatherType = "Partly Cloudy"
        weatherBackgroundImg.attr('src', 'assets/images/partlycloudy.jpg')
    }

    else if (rainWeatherTypes.includes(weatherApiIdType)) {
        console.log('im in rain')
        console.log('weatherApiIdType', weatherApiIdType)
        weatherType.id = weatherApiIdType
        weatherType.pokemonWeatherType = "Rain"
        weatherBackgroundImg.attr('src', 'assets/images/rainy.jpg')
    }

    else if (snowWeatherTypes.includes(weatherApiIdType)) {
        console.log('im in fog')
        console.log('weatherApiIdType', weatherApiIdType)
        weatherType.id = weatherApiIdType
        weatherType.pokemonWeatherType = "Snow"
        weatherBackgroundImg.attr('src', 'assets/images/snowy.jpg')
    }

    else if (sunnyWeatherTypes.includes(weatherApiIdType)) {
        console.log('im in sunny weather')
        console.log('weatherApiIdType', weatherApiIdType)
        weatherType.id = weatherApiIdType
        weatherType.pokemonWeatherType = "Sunny"
        weatherBackgroundImg.attr('src', 'assets/images/fog.jpg')
    }

    else if (windyWeatherTypes.includes(weatherApiIdType)) {
        console.log('im in windy weather')
        console.log('weatherApiIdType', weatherApiIdType)
        weatherType.id = weatherApiIdType
        weatherType.pokemonWeatherType = "Windy"
        weatherBackgroundImg.attr('src', 'assets/images/fog.jpg')
    }

    else {
        weatherBackgroundImg.attr("src", 'assets/images/defaultimage.jpg');
    }

     $("#currentweathercondition").text("The current weather condition is " + response.weather[0].description + ".");
     console.log(response.weather);
})


var latCoordinate;  //call to try to solve scope issue
var lonCoordinate;
var userZip

if (navigator.geolocation) {
  //true
alert ('let\'s find out more about weather and Pokemon?')
} else {
  //false
alert('geolocation not available?! What browser is this?');
  // prompt for city?
}


var x = document.getElementById("geolocation");
                        
        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        }
        
        function showPosition(position) {
          x.innerHTML = "Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude;
        
          let latCoordinate = position.coords.latitude
          let lonCoordinate = position.coords.longitude
       
          var queryURL = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + latCoordinate.toFixed(5) + "&lon=" + lonCoordinate.toFixed(5); 
            $.ajax({
              url: queryURL,
              method: "GET"
            }).then(function(response) {
              console.log(response);

              userZip = response.address.postcode;
              console.log(userZip)

            console.log(response.address.city); //successfully shows city
            });

            
          }

          $("#manualZipButton").on("click", function(event){
            event.preventDefault();
            userZip = $("#manualZip").val().trim();
            console.log(userZip)
          })
    
               





var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/weather_boosts.json",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
		"x-rapidapi-key": "137b0a8991mshfe042d583612905p1ff297jsnc05f2d857777"
	}
}


$.ajax(settings).done(function (response) {
    console.log(response);
    $(".test").on("click", function() {
        var weather = $("#boostedTest option:selected").text();
        console.log(weather);
        var currentBoost = response[weather];
        for (i=0; i < currentBoost.length; i++) {
            console.log("The boosted types are: " + currentBoost[i]);
            var typeCard = $("<div>");
            typeCard.addClass("card border-0 typeCard");
            var typeSymbol = $("<img>");
            typeSymbol.addClass("card-img-top typeSymbol");
            typeSymbol.attr("src", "./assets/images/" + currentBoost[i] + ".png");
            typeCard.append(typeSymbol);
            var typeTitle = $("<div>");
            typeTitle.addClass("card-title text-center");
            typeTitle.text(currentBoost[i]);
            typeCard.append(typeTitle);
            $("#typeBox").append(typeCard);
        }
    })
});

