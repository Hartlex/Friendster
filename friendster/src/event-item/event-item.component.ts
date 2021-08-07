import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { EventInfoContainer } from 'src/app/assets/classes/event-info-container';
import { WebFacadeService } from 'src/app/assets/services/web-facade.service';
import { EventDetailPage } from 'src/app/pages/event-detail/event-detail.page';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})


export class EventItemComponent implements OnInit {
  
  public info:EventInfoContainer;
  
  constructor(public modalController:ModalController,private mockDB:WebFacadeService) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: EventDetailPage,
      cssClass: 'my-custom-class',
      componentProps:{
        'info': this.info
      }
      
    });
    modal.onDidDismiss().then(async ()=>{
      this.info= await this.mockDB.getEventInfo(this.info.id);
    })
    return await modal.present();
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  onItemClick(){
    this.presentModal();
  }
  async onDeleteClick(){
    await this.mockDB.RemoveEvent(this.info.id);
    window.location.reload();
  }
  ngOnInit() {
    
  }

}
