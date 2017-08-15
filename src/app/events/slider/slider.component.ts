import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Event } from 'app/events/shared/event.model';

import { MonthComponent } from 'app/events/month/month.component';
import { EventService } from "app/events/shared/event.service";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  events: Event[];
  months;

  constructor(
    private eventService: EventService) { }
  
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.getMonths();

  }

  ngAfterViewInit(): void{
    
    var activeMonth = document.getElementsByClassName('active')[0];
    var slider = document.getElementsByClassName('slider')[0];
    var sliderWidth = slider.getBoundingClientRect().width;
    var activeMonthLeft = activeMonth.getBoundingClientRect().left;
    var activeMonthWidth = activeMonth.scrollWidth;

    var scroll = activeMonthLeft - sliderWidth/2 + activeMonthWidth/2
    slider.scrollLeft = scroll;    
}

  getMonths(): void {
    this.months = [];
    for(var i = 0; i < this.events.length; i++) {
      var found = false;
      for(var j = 0; j < this.months.length; j++) {
        if(this.events[i].date.getMonth() == this.months[j].getMonth() && this.events[i].date.getFullYear() == this.months[j].getFullYear())
          found = true;
      }
      if(!found)
        this.months.push(this.events[i].date);
    }
    //fill blank months
    for(var i = 0; i < this.months.length; i++) {
      if(i != this.months.length-1) {
        var diff = this.monthDiff(this.months[i], this.months[i+1])


        for(var j = 1; j < diff; j++) {
          var d = new Date(this.months[i].getFullYear(), (this.months[i].getMonth()) + j, 1);
          this.months.splice(i+j, 0, d);
        }
      }
    }
  }

  monthDiff(d1, d2) {
      if(d1.getTime() > d2.getTime())
      {
          var temp = d1;
          d1 = d2;
          d2 = temp;
      }
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }
}