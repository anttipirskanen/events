import { Injectable } from '@angular/core';
import { Event } from 'app/events/shared/event.model';
import { Subject }  from 'rxjs/Subject';

@Injectable()
export class EventService {
    
    //Observable Event sources
    private eventSelectedSource = new Subject<Event>();

    //Observable Event streams
    eventSelected$ = this.eventSelectedSource.asObservable();

    selectedEvent: Event;


    getEvents(): Event[] {
        return EVENTS;
    }

    selectEvent(e: Event) {
        this.eventSelectedSource.next(e);
    }

    addEvent(e: Event) {
        EVENTS.push(e);
        console.log(EVENTS);
    }

    deleteEvent(id: number) {
        for(var i = 0; i < EVENTS.length; i++) {
            if(EVENTS[i].id == id) {
                EVENTS.splice(i, 1);
                break;
            }
        }
    }
}

const EVENTS: Event[] = [
    
    {id: 1, description: 'Kevät', date: new Date('2017-4-1'), type: 'event', image: ' https://s-media-cache-ak0.pinimg.com/originals/a5/7d/c4/a57dc439039c23f59234a7b95acc94ac.jpg'},    
    {id: 1, description: 'Kuopio tanssii ja soi', date: new Date('2017-6-14'), type: 'event', image: 'https://static.pexels.com/photos/279315/pexels-photo-279315.jpeg'},
    {id: 2, description: 'Kuopio juhlii', date: new Date('2017-8-25'), type: 'event', image: 'http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg'},
    {id: 4, description: 'Testitapahtuma', date: new Date('2017-9-1'), type: 'event', image: 'https://static.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg'},
    {id: 5, description: 'Testitapahtuma2', date: new Date('2017-9-3'), type: 'event', image: 'http://www.blogdelfotografo.com/wp-content/uploads/2014/12/Mariluz-Rodriguez_Elemento-de-inter%C3%A9s-1200x520.jpg'},
    {id: 6, description: 'Joulu', date: new Date('2017-12-24'), type: 'event', image: 'https://www.pixelstalk.net/wp-content/uploads/2015/12/Superb-winter-landscape-hd-download.jpg'},
   
];
