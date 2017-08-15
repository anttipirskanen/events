import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Event } from 'app/events/shared/event.model';
import { EventService } from "app/events/shared/event.service";

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
    
  constructor(
    private eventService: EventService,
  ) { }
  
  @Input() event: Event;

  selectThis() {
    this.eventService.selectEvent(this.event);
  }
}