import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { from, Observable } from 'rxjs';

@Injectable()
export class ConfigurationService {

  private serviceUrl = `${environment.baseUrl}/dashboard`

  constructor(private client: HttpClient) { }

  getDashboardInfo(): Observable<any> {
    return from(new Promise((resolve) => {
      this.client.get(this.serviceUrl)
      .toPromise()
      .then((goodResponse) => {
        console.log(goodResponse);
        resolve(goodResponse);
      })
    }));
  }
}
