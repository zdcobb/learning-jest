let fetchData = require('./Callback');

// This method won't work. In Jest, a test will finish as soon as it reaches the end of the execution
// In this case, it's the invocation of fetchData inside test();
test('the data is peanut butter', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }

    // function ends here, after fetchData() is called. It doesn't NOT wait for callBack() to get called.
    fetchData(callback);
});

// Jest claims the above test shouldn't work the way it does, but yet it does... why??

// if you want it to work properly, implement the 'done' functionality.
// test('the data is peanut butter', (done) => {
//     function callback(data) {
//         expect(data).toBe('peanut butter');
//         done();
//     }

//     fetchData(callback);
// });