import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  configurar(data: any) {
    return this.http.post("http://localhost:8080/configuration", data);
  }

  getPakingSpaces() {
    return this.http.get("http://localhost:8080/configuration");
  }

}
