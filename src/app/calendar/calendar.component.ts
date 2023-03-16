import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  selectedOption:string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/calendar/dia'])
  }

  onSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
    if(value == "1"){
      this.router.navigate(['/calendar/dia'])
    }else if(value == "2"){
      this.router.navigate(['/calendar/semana'])
    }else{
      this.router.navigate(['/calendar/mes'])
    }
  }

}
