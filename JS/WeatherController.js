app.controller('WeatherController', function($scope, WeatherService) {
    $scope.city = '';
    $scope.weatherData = null;

    $scope.getWeather = function() { // ✅ matches your HTML button
        if ($scope.city) {
            WeatherService.getWeatherByCity($scope.city).then(function(response) {
                $scope.weatherData = response.data;
                console.log("Weather Data:", response.data);
            }).catch(function(error) {
                console.error("API Error:", error);
                alert("City not found or API issue.");
            });
        }
    };

    $scope.getLocationWeather = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                WeatherService.getWeatherByCoords(lat, lon).then(function(response) {
                    $scope.weatherData = response.data;
                    $scope.$apply(); // ✅ Needed since callback is outside Angular's digest
                }).catch(function(error) {
                    console.error("API Error:", error);
                    alert("Location weather fetch failed.");
                });
            });
        } else {
            alert("Geolocation not supported!");
        }
    };
});
