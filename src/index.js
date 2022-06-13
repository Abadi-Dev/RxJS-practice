import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
    // subscriber.next('hello world'); // the log will only happens after the observer calls the next fucntion
    // subscriber.error('Error!'); an error function will terminate the observable, so the next 2 function wont be called
    // subscriber.next('test');
    // subscriber.complete(); this function will terminate the observable
    setInterval(() => {
            subscriber.next(console.log('test'));
        }, (1000)) // the observer will continue to log the values even after the "complete" fucnction is called
    subscriber.complete();
});



observable.subscribe({
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