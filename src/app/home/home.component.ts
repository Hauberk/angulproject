import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fname : string = '';  
  lname : string='';
  dob : string='';
  phno : number;
  email : string='';  

  choose: string;

  choices = [
    'I need truck(s) to ship goods.',
    'I own trucks.',
    'I drive truck(s)',
  ];





OnClick()
{
  
  console.log("button clicked");

  
}

  constructor(

    
  ) { }
  

  ngOnInit() {
    
    
  }
  


}
