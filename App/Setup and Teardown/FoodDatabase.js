let cityApi = require('./CityDatabase');
let foods = [];

function initializeDB() {
    return new Promise((resolve, reject) => {
        foods = ['Sausage', 'Mofongo'];
        resolve(foods);
    });
}

function clearDB() {
    return new Promise((resolve, reject) => {
        foods = [];
        resolve();
    });
}

function isValidCityFoodPair(cityName, foodName) {
    return (cityApi.isCity(cityName) && foods.includes(foodName));
}

module.exports = {
    initializeFoodDatabase: initializeDB,
    clearFoodDatabase: clearDB,
    isValidCityFoodPair: isValidCityFoodPair
};