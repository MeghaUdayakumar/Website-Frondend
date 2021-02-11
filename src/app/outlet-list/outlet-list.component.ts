import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-outlet-list',
  templateUrl: './outlet-list.component.html',
  styleUrls: ['./outlet-list.component.css']
})
export class OutletListComponent implements OnInit {
   outlets : any;



  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    let resp= this.http.get("https://localhost:5000/api/outlet");
    resp.subscribe((data)=>this.outlets=data);
    

    
   

    




    
    

    
  }

}
