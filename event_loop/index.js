const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 6;

setTimeout(() => {
    console.log('Timer 1');
}, 0);

setImmediate(() => {
    console.log('Immediate 1');
});

fs.readFile('test-file.txt', () => {
    console.log('I/O finished');

    setTimeout(() => {
        console.log('Timer 2');
    }, 0);

    setTimeout(() => { 
        console.log('Timer 3');
    }, 3000);

    setImmediate(() => {
        console.log('Immediate 2');
    });

    // CPU Intensive Task
    crypto.pbkdf2('password1', 'salt', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 1 Encrypted');
    });

    crypto.pbkdf2('password2', 'salt', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 2 Encrypted');
    });

    crypto.pbkdf2('password3', 'salt', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 3 Encrypted');
    });

    crypto.pbkdf2('password4', 'salt', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 4 Encrypted');
    });

    crypto.pbkdf2('password5', 'salt', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 5 Encrypted');
    });

    crypto.pbkdf2('password6', 'salt', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 6 Encrypted');
    });
}); // This is an asynchronous function

console.log('Hello from the top-level code');