let fetches = require('./Callback');
let fetchPromise = fetches.fetchPromise;
let fetchRejection = fetchRejection;

// Now we get to the best part: Async Await

// in the typical async/await fashion, you need to denote the test function as async
test('the data is peanut butter', async () => {

    expect.assertions(1);
    const data = await fetchPromise();

    // now that you have the data via await, you can test it normally
    expect(data).toBe('peanut butter');

});

// same thing with catches/rejects
test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchRejection();
    } catch (error) {
        expect(error).toMatch('error');
    }
});

// You can also combine the async/await with .resolves and .rejects
test('the data is peanut butter', async () => {
    await expect(fetchPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    await expect(fetchRejection()).rejects.toBe('error');
});