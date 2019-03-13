let fetches = require('./Callback');
let fetchPromise = fetches.fetchPromise;
let fetchRejection = fetches.fetchRejection;

// testing promises is a bit easier, simply return the promiseCall() in the test itself 
// Then you can test the data expected to be resolved
test("the data should be \'peanut butter\'", () => {

    //Make absolutely sure you return the promise, if you don't, the test will finish before the promise is back.
    return fetchPromise().then((data) => {
        expect(data).toBe('peanut butter');
    });
});

// you can also use the .resolves matches in your expect statement.
test('the data is peanut butter with a .resolve', () => {

    return expect(fetchPromise()).resolves.toBe('peanut butter');
    // Notice you don't need to expect an assertion
});



// if you expect a promise to get rejected(via.catch()), you can use the.catch() method in the test.
test('the fetch fails with an error', () => {

    // You just need to add expect.assertions to verify the number of assertions called
    // without this, a resolved promise WILL NOT fail the test.
    //
    expect.assertions(1);
    //
    // In this scenario, an assertion is a call. It simply means you're expecting (X) amount of things to be called
    // In this case, you're expecting 1 call (the promise), so if it finishes without calling/finishing anything, it done goofed.
    // https://jestjs.io/docs/en/expect#expectassertionsnumber

    return fetchRejection().catch((error) => {
        expect(error).toMatch('error');
    })
});

// just like successes and .resolve(), you can test for failures with .reject().
test('the fetch fails with an error', () => {
    return expect(fetchRejection()).rejects.toMatch('error');
});