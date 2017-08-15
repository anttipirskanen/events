import { Component, OnInit } from '@angular/core';
import { Event } from 'app/events/shared/event.model';
import { EventService } from 'app/events/shared/event.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ImageSearchService } from "app/events/create-event/image-search.service";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {

    showSidebar: Boolean;
    newEvent: Event;
    date : NgbDateStruct;

    constructor(
      private eventService: EventService,
      private imageSearchService: ImageSearchService
     ) { }

    ngOnInit(): void {
      this.showSidebar = false;
      this.newEvent = { id: new Date().getTime(), description: '', date: new Date(), type: 'movie', image: '' };
      this.selectToday();
    }

    createEvent():void {
      var d = new Date(Date.UTC(this.date.year, this.date.month-1, this.date.day));
      this.newEvent.date = d;
      if(!this.newEvent.image) {
        this.newEvent.image = 'http://www.guoguiyan.com/data/out/112/69141422-landscape-wallpapers.jpg';
      }
      this.eventService.addEvent(this.newEvent);
      this.showSidebar = false;
      this.newEvent = { id: new Date().getTime(), description: '', date: new Date(), type: 'event', image: '' };
    }

    private selectToday() {
      var now = new Date();
      this.date = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}