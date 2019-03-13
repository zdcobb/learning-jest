let cityApi = require('./CityDatabase');
let food = require('./FoodDatabase');

// By default, the before and after blocks with affect all tests on the page
// This is all that we've seen up until now
beforeEach(() => {
    return cityApi.initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

// But you can also use a describe block to group tests together
// This allows you to have different set ups for different blocks if you need more control
describe('matching cities to food', () => {

    //inside this block, we can create another beforeEach()
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 Sausage', () => {
        expect(food.isValidCityFoodPair('Vienna', 'Sausage')).toBe(true);
    });

    test('San Juan <3 Mofongo', () => {
        expect(food.isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
})

// this is what the execution order looks like for a nested before/after situation
// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));
// test('', () => console.log('1 - test'));
// describe('Scoped / Nested block', () => {
//     beforeAll(() => console.log('2 - beforeAll'));
//     afterAll(() => console.log('2 - afterAll'));
//     beforeEach(() => console.log('2 - beforeEach'));
//     afterEach(() => console.log('2 - afterEach'));
//     test('', () => console.log('2 - test'));
// });

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll