import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EventInfoContainer } from 'src/app/assets/classes/event-info-container';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})


export class EventItemComponent implements OnInit {
  public info:EventInfoContainer;
  
  constructor() {

   }

  ngOnInit() {
    
  }

}
