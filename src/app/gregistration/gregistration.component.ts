import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gregistration',
  templateUrl: './gregistration.component.html',
  styleUrls: ['./gregistration.component.scss']
})
export class GregistrationComponent implements OnInit {

  constructor(private route:ActivatedRoute) 
  {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    
  }
  accounts = [
    {value: 'bankaccount-0', viewValue: 'Savings'},
    {value: 'bankaccount-1', viewValue: 'Current'},
  ];

}
