import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { VolunteerService } from '../volunteer.service';

/**
 *  The routing page of VolunteerRegister gives the brief information of the app component contain the navigation bar and the opeartion hours of works.
 *  The volunteerform gives the detail information of the form.
 *  The form field which include the firld of VolunteerId, Name , EmailId, PhoneNumber, Selected Outlet and the SelectedDate.
 *  By refering the Outlet list by displaying the details of outlet the user can select the outlet and register by using the volunteer registeration form
 *  Then by entering the field of the volunteer , the user can successfully register the details.
 
 * All the fiels in the form is mandatory to fill .
 * Once the user completed the form the form display that the volunteer registration made successfull.
 * BY using the "create" method the fields entered in the form called in the console and binds in the API 
 * The server binds the values with the model and it added in the Volunteer DataBase Table.
 * The values which will display in the Database.
 * By onclicking "SUBMIT" it takes the action of ngsubmit.
 * 
 */

export class VolunteerModel
{
  id:any;
  Name!: string;
  EmailId!: string;
  PhoneNumber!: number;
  SelectedOutlet!: string;
  SelectedDate!: String;

 }
@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {

  constructor(private volunteerService: VolunteerService) { }
  
  volunteer: VolunteerModel = new VolunteerModel();

  onSubmit(form:NgForm):void{
    console.log(from.bind);
    this.volunteerService.Create(from.bind).subscribe
    ((res: any) => {
        console.log(res);
        form.resetForm();
      })

  }


  
  //declarating a variable
  
 // to capture the response
  ngOnInit(): void {
    
  }

}
