let cities = [];

function initializeDB() {
    return new Promise((resolve, reject) => {
        cities = ['Vienna', 'San Juan', 'Los Angeles'];
        resolve(cities);
    });
}

function clearDB() {
    return new Promise((resolve, reject) => {
        cities = [];
        resolve();
    });
}

function isCity(cityName) {
    return cities.includes(cityName);
}

module.exports = {
    initializeCityDatabase: initializeDB,
    clearCityDatabase: clearDB,
    isCity: isCity
};