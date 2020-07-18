import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppHttpService {

  constructor(private http: Http) { }

  getHeaders() {
    console.log('get headers');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // TODO: add token

    return headers;
  }

  getRequestOptions(): RequestOptions {
    console.log('request options');
    const options = new RequestOptions();
    options.headers = this.getHeaders();
    //console.log(options);
    return options;
  }

  get(url: string) {
    console.log('App http');
    return this.http.get(url, this.getRequestOptions());
  }

  post(url: string, data: any) {
    return this.http.post(url, data, this.getRequestOptions());
  }

}
