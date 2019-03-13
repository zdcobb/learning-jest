function fetchCallback(callbackFn) {
    // Do some stuff
    setTimeout(function () {
        let data = 'peanut butter';
        callbackFn(data);
    }, 1000);
};

function fetchPromise() {
    return new Promise((resolve, reject) => {
        // simulate a promise that may take 2 seconds to resolve
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    });
};

function fetchRejection() {
    return new Promise((resolve, reject) => {
        reject('error');
    })
}

module.exports = {
    fetchCallback: fetchCallback,
    fetchPromise: fetchPromise,
    fetchRejection: fetchRejection
};