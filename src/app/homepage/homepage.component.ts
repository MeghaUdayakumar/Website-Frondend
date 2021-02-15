import { Component, OnInit } from '@angular/core';

/**
 * Routing to Navigation Component of HomePage
 * On start the homepage component it display the header which include the logo, navigation bar such as Homepage, Outlet Disturbution and voluteer registeration.
 * Next it gives the motto of the GouthamCare Charity Society.
 * The next section which display the Hours Of Operation .
 * The upcoming section which tells the About Us" "Everyone has something to give! Gotham Care aims to
   build community by engaging people to help  so  We Gotham Cares Charitable Society is planning to distribute 
  food among  the  most needy of Gotham so  our Society is planning to serve various types of  various foods and ready 
  to eat food packets through outlets across the city and we are in the direct need of volunteers for the distribution
  outlets.Whether you have only a few hours one day a week or can volunteer every day, your assistance is much needed.
  Neighbors volunteer  can have their time and talent to help people to live with dignity and independence. Interested 
  in volunteering? Please  enter the field and submit the volunteer application found on the left-hand side menu on this website page." for the GouthamCare Charity Society.

  * The contact footer which gives the contact information such as Address of the Charity " 7/A Raj Street , Thiruvenagadam Nagar,Coimbatore 641697."and the social media links which 
    including the emailid and phone number emailId:gouthamcare@gmail.com, Telephone:+2080141, MobileNumber:9443770794, WhatsappNumber:9566611305.
  * It includes all the information of the GouthamCare Charity Society in the main homepage.
 */


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
