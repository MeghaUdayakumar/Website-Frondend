import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/**
 * On initial loading this Outlet routing page it will display the header which contain the Main Menu and Moto as 
 in the Homepage.
 * Once the page loaded ther User can get the list of outlets that are displayed in the API which is updated by the Admin
 controller

 * Then the list of  outlets are displayed  by the help of the HttpClient by getting the specific Url of the Outlet.
 * The Outlet list will be display in the table based on the date and with the columns which is provided in the database.
 * The table which inlude the attributes of OutletName, StreetName, Landmark, NoOFAvailableFoods, NoOfVolunteerRequired and the OrderDate.
 

 * The user who view the table can get the details of outlet disturbution list and can register by clicking the volunteer button
 * The outlet list  in the outlet component will automatically get update when the admin change or edit the outlet list and it directly 
    fetch it from the API outlet.

    *In the outlet service it gets the url of the outlet API and directly gets displayed in the website page. There is no kind of edit , update and delete
    option will be avilable in the page because the user has no autenication to edit the outlet.
 */




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
