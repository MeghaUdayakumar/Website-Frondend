import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VolunteerModel } from './volunteer-form/volunteer-form.component';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  private readonly URL:string ="https://localhost:5000/api/volunteer";

  constructor(private http:HttpClient) { }
  
  Create(data: VolunteerModel):Observable<VolunteerModel>
  {
    return this.http.post<VolunteerModel>(this.URL,data );
  }
  GetAll():Observable<VolunteerModel[]>
  {
    return this.http.get<VolunteerModel[]>(this.URL);
  }
}
