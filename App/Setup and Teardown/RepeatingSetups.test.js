let cityApi = require('./CityDatabase');


// beforeEach will execute before every test in the file
beforeEach(() => {

    // Normally this is fine for a function, but since we are actually returning a promise, lets try something else
    // cityApi.initializeCityDatabase();

    // you can handle asynchronous code the same way test do
    return cityApi.initializeCityDatabase();
    // like a test, just return the promise and jest will know to wait for it.
});

// alternatively, you can also use the done parameter, this is especially useful if it uses a callback instead of a promise.
// beforeEach((done) => {
//     cityApi.initializeCityDatabase;
//     done();
// })

afterEach(() => {
    // clearCityDatabase() isn't asynchronous so you can just call it normally.
    cityApi.clearCityDatabase();
})

test('city database has Vienna', () => {
    expect(cityApi.isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(cityApi.isCity('San Juan')).toBeTruthy();
});