import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
    subscriber.next('hello world');
    subscriber.next('test');
    subscriber.complete();
});

observable.subscribe({
    next: (value) => {
        console.log(value);
    }
});