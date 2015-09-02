$(function() {

    getWeatherData('ua', showDate, showErr);

    function showDate (data) {
        var city = data.city.name;
        var country = data.city.country;
        
        $('#location').html(city + ', <b>' + country + '</b>');
    }
        
    function showErr(message) {
        
    }
    
    
});
