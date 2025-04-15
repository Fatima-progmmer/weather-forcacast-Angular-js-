app.factory('WeatherService', function($http) {
    const apiKey = '9ee74ad7aa825d9f8bf3886c56e0b48d'; 
    return {
        getWeatherByCity: function(city) {
            return $http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        },
        getWeatherByCoords: function(lat, lon) {
            return $http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        }
    };
});
