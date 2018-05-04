import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-addtruck',
  templateUrl: './addtruck.component.html',
  styleUrls: ['./addtruck.component.scss']
})
export class AddtruckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  permits = new FormControl();

  permitList = [
  'All India', 
  'Andhra Pradesh',
  'Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jammu & Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Punjab','Rajasthan',
  'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal', 
  ];

  types = [
    {value: 'trucktype-0', viewValue: '4-Wheeler'},
    {value: 'trucktype-1', viewValue: '6-Wheeler'},
    {value: 'trucktype-2', viewValue: '8-Wheeler'},
    {value: 'trucktype-3', viewValue: '16-Wheeler'},
  ];

  

}
