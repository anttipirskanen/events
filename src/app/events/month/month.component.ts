import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'app/events/shared/event.model';
import { EventComponent } from '../event/event.component';
import { EventService } from "app/events/shared/event.service";

@Component({
  selector: 'month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
    constructor(
    private eventService: EventService) { }
  
  @Input() date: Date;
  events: Event[];
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  today = new Date();
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}