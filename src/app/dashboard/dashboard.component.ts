import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboarditems:any=[
    {
      name:"Rahul",
      activity:"Viewing",
      template:"Bio sheet",
      time:"viewing",duration:"viewing"
    },
    {
      name:"Kishore",
      activity:"Opened",
      template:"Alpha Rom",
      time:"3 mins ago",duration:"1min 40sec"
    }
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
