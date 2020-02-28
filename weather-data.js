

function Weather(cityName, description, humidity) {
    this.cityName = cityName;
    this.description = description;
    this.humidity = humidity;
    this._feelslike = "";
    this._temperature = "";
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * (9/5) - 459.67).toFixed(0) + ' F'
    }
});

Object.defineProperty(Weather.prototype, 'feelslike', {
    get: function() {
        return this._feelslike;
    },
    set: function(value) {
        this._feelslike = (value * (9/5) - 459.67).toFixed(0) + ' F'
    }
});