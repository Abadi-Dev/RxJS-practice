// important: this the imperative way of writing the observable and observer
// this is to import the observable object which will be used in a imperative way
import { Observable } from "rxjs";

/*
const observable = new Observable((subscriber) => {
    // subscriber.next('hello world'); // the log will only happens after the observer calls the next fucntion
    // subscriber.error('Error!'); an error function will terminate the observable, so the next 2 function wont be called
    // subscriber.next('test');
    // subscriber.complete(); this function will terminate the observable

    //observable are tricky to deal with and we should be carefull
    //a common issue we might face is memory leaks


    const id = setInterval(() => {
            subscriber.next('in observer');
            console.log("in observable");
        }, (1000)) // the observer will continue to log the values even after the "complete" fucnction is called, but the observable won't so we have a memory leak
        // so we are responsible for cleaning a memory after an observable
        // subscriber.complete(); // if we want to observable to keep running (like maybe we have multiple observers subscribed to the observable) the we can 
        // remove the "complete" function and unsbscribe within the observer

    // console.log('test');

    //this will fix the memory leak issue
    return () => {
        clearInterval(id);
    }
});


// console.log('before');

// this is the observer
const subscription = observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('complete called');
    },
    error: (err) => {
        console.log(err);
    }
});

// console.log('after');

// this function will unsub the observer from the observable without the need 
// to call the complete the funtion, causing the observable to continue running
// subscription.unsubscribe();

// example:
setTimeout(() => {
    subscription.unsubscribe(console.log('unsubbed!'));
}, 6000);

*/

/*****************************************************************
 *
 this is to import the interval object which will be used in a declaritive way






import { interval } from "rxjs";
// const observable = interval(1000);

// const subscription = observable.subscribe(
//     console.log('woah')
// );


import { timer } from 'rxjs';


// to know the diffrence between the interval and timer read : 
// https://stackoverflow.com/questions/63717783/what-is-the-difference-between-the-rxjs-operators-delay-timer-and-interval

// timer(2000, 1000).subscribe(n => console.log('timer', n));
// interval(1000).subscribe(n => console.log('interval', n));


// the fromEvent listens to a specific document the observable should watch

import { fromEvent } from "rxjs";

// takes two arguemnts, the dom element to listens to, and the event

// const observable = fromEvent(document, 'click');

// const subscription = observable.subscribe(
//     console.log
// );

import { of, from } from "rxjs";


// the "of" operator has unlimited values or args


// const observable = of(1, 2, 3, 4, 5, 6, [7, 8, 9]); // notice the diffrence in the console!


// const subscription = observable.subscribe({
//     next(value) {
//         console.log(value);
//     },
//     complete() {
//         console.log('complete is called');
//     }
// });
// subscription.unsubscribe;

// console.log('the from operator starts here!');
// we can flatten the array to remove the child array by using the FROM operator

// 'from' operator only accepts 1 array(i think) and it outputs every element of the array

//try these !:

// const arr = [7, 8, 9];
// const observable2 = from(arr);
// const observable2 = from('abadi);
// const observable2 = from(fetch('https://jsonplaceholder.typicode.com/todos/1')); // the observer will wait for the promise to resolve
// const subscription2 = observable2.subscribe({
//     next(value) {
//         console.log(value);
//     },
//     complete() {
//         console.log('From operator is done');
//     }
// })


/**************************************************** */

//pipes starts here!
// pipes are used to manipulate data, like filtering and other pipes

/**************************************************** */

import { of, fromEvent } from "rxjs";
import { filter, map, pluck, reduce, take, scan, tap } from 'rxjs/operators'


// const observable = of(1, 2, 3, 4, 5, 6);
// const doubelTheValue = observable.pipe(
//     map((value) => value + value) // value = every value in the array
// ); // the of operator will push every value, so every value will go through the pipe

// // we can sub to the original observable or to the piped one 

// console.log('this is the piped observable:');
// const subscription = doubelTheValue.subscribe({
//     next(value) {
//         console.log(value);
//     },
//     complete() {
//         console.log('complete is called');
//     }
// });
// subscription.unsubscribe;


// console.log('this is the original observable');
// const subscription2 = doubelTheValue.subscribe({
//     next(value) {
//         console.log(value);
//     },
//     complete() {
//         console.log('complete is called');
//     }
// });
// subscription.unsubscribe;

// const observable = fromEvent(
//     document, 'keydown'
// );
// const plucked = observable.pipe(
//     pluck('code') // we are plucking the code value from the object, we dont care about other properties
// );

// // we can sub to the original observable or to the piped one 

// const subscription = plucked.subscribe({
//     next(value) {
//         console.log(value);
//     },
//     complete() {
//         console.log('complete is called');
//     }
// });
// subscription.unsubscribe;

// filter operater
// const observable = fromEvent(
//     document, 'keydown'
// );
// const plucked = observable.pipe(
//     pluck('code'), // we are plucking the code value from the object, we dont care about other properties
// );
// const filtered = plucked.pipe( // here we are cennecting two pipes, firsy the pluck then the filter
//     filter(code => code === 'Space')
// ); // here we will be given the value pushed from the previous pipe ('code')
// // an then we will filter out every code except the "space code"

// // we can sub to the original observable or to the piped one 
// const subscription = filtered.subscribe({
//     next(value) {
//         console.log(value);
//     },
//     complete() {
//         console.log('complete is called');
//     }
// });
// subscription.unsubscribe;

// an then we will filter out every code except the "space code"

const observable = of(1, 2, 3, 4, 5, 6, 7, 8);

const taken = observable.pipe( // the take operator will will only take the specified number of eimtted data
    take(5) // here we will take only the first 5 values from the observer (1-5) and then we will pass them to te observer or the next pipe
    , tap(console.log) // the tap will spy on the values before they are pushed, it's very powerfull for debugging when we use alot of operators
);

const reduced = taken.pipe(
    reduce((acc, val) => acc + val, 0) // the reduce operator will take two args, a function and a seed value, the seed value is optional but i'll write 0 instead
)

console.log('reduce operator starts here!');
// we can sub to the original observable or to the piped one 
const subscription = reduced.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete is called');
    }
});
subscription.unsubscribe;

// const scanned = taken.pipe( // the scan operator  will push every calculation while the reduce will only push the last one
//     scan((acc, val) => val + acc, 0)
// )
// console.log('scan operator starts here!');
// // we can sub to the original observable or to the piped one 
// const subscription2 = scanned.subscribe({
//     next(value) {
//         console.log(value);
//     },
//     complete() {
//         console.log('complete is called');
//     }
// });
// subscription2.unsubscribe;