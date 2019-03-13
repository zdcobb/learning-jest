let cityApi = require('./CityDatabase');

// Sometimes you only need to do a set up once rather than before every test in the file.
// In our 'RepeatingSetup' test, we initialize and clear the database for every test
// But most of the time you would only want to do something like this once, as it can be pretty taxing.

// If you just want to do a set up once time at the beginning, use beforeAll() just like beforeEach()
beforeAll(() => {

    // sure to return calls when they return promises or are asynchronous
    return cityApi.initializeCityDatabase();
});

// and for a single tear down at the end--you guessed it: afterAll()
afterAll(() => {
    return cityApi.clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(cityApi.isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(cityApi.isCity('San Juan')).toBeTruthy();
});