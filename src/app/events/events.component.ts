import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Event } from 'app/events/shared/event.model';
import { EventService } from 'app/events/shared/event.service';
import {SliderComponent} from 'app/events/slider/slider.component';
import {CreateEventComponent} from 'app/events/create-event/create-event.component';



@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  
  openCreateEvent(): void {



  }

}