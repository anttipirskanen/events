import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ImageSearchService {
    
    constructor (private http: Http) {}
    data: string;
    getImages(query, count): void {
        query.replace(new RegExp(' ', 'g'), '+'); 
        var url = 'https://www.google.fi/search?q='+query+'&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiJ5ZGJ17jUAhVBKpoKHed2Bk8Q_AUICigB&biw=1680&bih=944';
        this.http.get('https://jsonplaceholder.typicode.com/posts/1')
        .map(this.extractData)
        .subscribe(data => this.data = data);
    }

    private extractData(res: Response) {
        console.log(res);
        let body = res.json();
        return body.data || { };
    }
}