let fetches = require('./Callback');
let fetchCallback = fetches.fetchCallback;

// This method won't work. In Jest, a test will finish as soon as it reaches the end of the execution
// In this case, it's the invocation of fetchData inside test();
test('the data is peanut butter', () => {

    function callback(data) {
        expect(data).toBe('peanut butter');
    }

    // function ends here, after fetchData() is called. It doesn't NOT wait for callBack() to get called.
    fetchCallback(callback);

    // the biggest part of the problem is that the test won't fail, because it never even reaches the inner expect.
    // you can see this by expecting an assertion, where it will fail after getting 0 assertions.
    //
    // expect.assertions(1);

});

// if you want it to work properly, implement the 'done' functionality.
test('the data is peanut butter', (done) => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        // this tells Jest that a callback is supposed to happen so just wait for it to finish.
        done();
    }

    fetchCallback(callback);
});