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
 */
// this is to import the interval object which will be used in a declaritive way
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

const observable = fromEvent(document, 'click');


const observer = observable.subscribe(
    console.log()
)