import { Component, Input, OnInit } from '@angular/core';
import { EventInfoContainer } from 'src/app/assets/classes/event-info-container';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  @Input() info:EventInfoContainer;
  constructor() { }

  ngOnInit() {
  }
  
}
