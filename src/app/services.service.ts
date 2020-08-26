import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, ) {
   
  }

  serGetListe(){
    let token = "";
    let headers = new HttpHeaders ({
      // 'authorization': "Baerer" + " " + token,
      'Content-Type': "application/json",
      'Accept': "application/json"
    });

    var url = "http://ec2-52-59-71-113.eu-central-1.compute.amazonaws.com:9977/v2/api-docs";
    const options = {headers: headers}

    return new Promise((resolve, rejects) => {
      this.http.get(url, options)
        .subscribe(res => { 
          resolve(res);
        }, (err) => {
          rejects(err);
        });
    });
  }
}
