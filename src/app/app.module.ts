import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EventService } from './events/shared/event.service';
import { ImageSearchService } from './events/create-event/image-search.service';
import { EventsComponent } from './events/events.component';
import { SliderComponent } from './events/slider/slider.component';
import { MonthComponent } from './events/month/month.component';
import { EventComponent } from './events/event/event.component';
import { SelectedEventComponent} from './events/selected-event/selected-event.component';
import { CreateEventComponent} from './events/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SliderComponent,
    MonthComponent,
    EventComponent,
    SelectedEventComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [EventService, ImageSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
