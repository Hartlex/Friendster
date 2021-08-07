import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

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
  private delClicked:boolean;
  constructor(public modalController:ModalController,private mockDB:WebFacadeService,private toaster:ToastController) { }
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
    if(this.delClicked)
      return;
    this.presentModal();
  }
  async onDeleteClick(){
    this.delClicked = true;
    await this.showDeleteToast();
    this.delClicked = false;
  }

  async showDeleteToast() {
    const toast = await this.toaster.create({
      header: 'Löschen des Events',
      message: 'Möchten sie dieses Event löschen?',
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'Löschen',
          handler: async () => {
            await this.mockDB.RemoveEvent(this.info.id);
            window.location.reload();
          }
        }, {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
    
  }

}
