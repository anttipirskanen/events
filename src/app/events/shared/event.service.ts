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
    {id: 3, description: 'Wonder Woman', date: new Date('2017-5-31'), type: 'movie', image: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7751935/2017_The_Wonder_Woman_Gal_Gadot_wide.jpg'},
    {id: 5, description: 'Tekken 7', date: new Date('2017-6-1'), type: 'game', image: 'https://i.ytimg.com/vi/g4h8o4pWECI/maxresdefault.jpg'},
    {id: 5, description: 'Dirt 4', date: new Date('2017-6-9'), type: 'game', image: 'https://www.pelaajalehti.com/sites/default/files/imagecache/paakuva_sisalto/kuvat_artikkeli/dirt4.jpg'},
    {id: 1, description: 'Transformers 5', date: new Date('2017-6-25'), type: 'movie', image: 'http://screenrant.com/wp-content/uploads/Transformers-5-2017-Shared-Universe.jpg'},
    {id: 4, description: 'Game of Thrones Season 7', date: new Date('2017-7-16'), type: 'tv', image: 'https://static.giantbomb.com/uploads/original/3/31685/2742670-game.jpg'},
    {id: 2, description: 'Middle-Earth: Shadow of War', date: new Date('2017-10-10'), type: 'game', image: 'https://media.playstation.com/is/image/SCEA/middle-earth-shadow-of-war-listing-thumb-01-ps4-us-17feb17?$Icon$'},
    {id: 2, description: 'Call of Duty: WWII', date: new Date('2017-11-3'), type: 'game', image: 'https://www.callofduty.com/content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg'},
];
