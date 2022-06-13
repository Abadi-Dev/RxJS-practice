import { Observable } from "rxjs";

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

    console.log('test');
    //this will fix the memory leak
    return () => {
        clearInterval(id);
    }
});


console.log('before');

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

console.log('after');

// this function will unsub the observer from the observable without the need 
// to call the com
// subscription.unsubscribe();

// example:
setTimeout(() => {
    subscription.unsubscribe(console.log('unsubbed!'));
}, 6000);