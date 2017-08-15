import { Component, OnInit } from '@angular/core';
import { Event } from 'app/events/shared/event.model';
import { EventService } from 'app/events/shared/event.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'selected-event',
  templateUrl: './selected-event.component.html',
  styleUrls: ['./selected-event.component.css']
})
export class SelectedEventComponent implements OnInit {
  
  passwordGiven: boolean;
  selectedEvent: Event;

  constructor(private eventService: EventService) {
    eventService.eventSelected$.subscribe(
      event => {
        this.selectedEvent = event;
      });
  }
  
  ngOnInit(): void {
    this.passwordGiven = false;
    if(!this.selectedEvent) {
      this.setSelected();
    }
  }

  deleteThis(): void {
    var pw = ''

    if(!this.passwordGiven)
      pw =prompt("Enter password");
    
    if(pw == 'adventti' || this.passwordGiven)
    {
      this.passwordGiven = true;
      this.eventService.deleteEvent(this.selectedEvent.id);
      this.setSelected();
    }
    else
    {
      alert('Wrong password');
    }
  }
  
  setSelected(): void {
      var events = this.eventService.getEvents();
      var todayTs = new Date().getTime();
      var min =  {index: 0, value: 0}
      for(var i = 0; i < events.length; i++) {
        var diff = Math.abs(events[i].date.getTime() - todayTs)
        if(min.value == 0 || diff < min.value) {
          min.index = i;
          min.value = diff;
        }
      }
      this.selectedEvent = events[min.index];
  }
}