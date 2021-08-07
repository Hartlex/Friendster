import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { EventInfoContainer } from 'src/app/assets/classes/event-info-container';
import { EventDetailPage } from 'src/app/pages/event-detail/event-detail.page';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})


export class EventItemComponent implements OnInit {
  
  public info:EventInfoContainer;
  
  constructor(public modalController:ModalController) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: EventDetailPage,
      cssClass: 'my-custom-class',
      componentProps:{
        'info': this.info
      }
    });
    return await modal.present();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  onItemClick(){
    this.presentModal();
  }
  ngOnInit() {
    
  }

}
