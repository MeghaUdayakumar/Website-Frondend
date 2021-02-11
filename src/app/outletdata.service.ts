import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OutletdataService {
  url:string;

  constructor(private http:HttpClient) { 
    this.url="https://localhost:5000/api/outlet";
    
  }

}
