import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class makeAndModelsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  
  getList (){
      return this.http.get('/models').toPromise().then(res => res.json());
   }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
