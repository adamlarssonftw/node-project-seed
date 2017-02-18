import { Observable, Observer } from "rxjs";
import { RxHttpRequest } from "rx-http-request";

class Main {
    private requestURL = "http://www.google.com";
    constructor() {
        this.attemptRequest(this.requestURL);
    }

    private attemptRequest(url: string) {
        return RxHttpRequest.get(url).subscribe(
            (response) => {
                console.log(response);
            },
            (err) => console.log(err)
        );
    }
}

let m = new Main();
