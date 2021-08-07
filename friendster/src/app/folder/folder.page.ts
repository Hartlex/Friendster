import { Component, OnInit,AfterViewInit, ViewChild,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventInfoContainer } from '../assets/classes/event-info-container';
import {EventItemComponent} from '../../event-item/event-item.component'
import { WebFacadeService } from '../assets/services/web-facade.service';
import { ModalController } from '@ionic/angular';
import { AddEventPage } from '../pages/add-event/add-event.page';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})



export class FolderPage implements OnInit {
  public folder: string;
  @ViewChild('eventItemContainer',{read: ViewContainerRef,static:true}) container: ViewContainerRef;
  constructor(private modalController:ModalController,private activatedRoute: ActivatedRoute, private resolver: ComponentFactoryResolver,private webService:WebFacadeService) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddEventPage,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(()=>{
      this.ngOnInit();
    })
    return await modal.present();
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  createComponent(info:EventInfoContainer){
    const factory = this.resolver.resolveComponentFactory(EventItemComponent);
    let ref = this.container.createComponent(factory);
    ref.instance.info = info;
  }

  onAddEvent(){
    this.presentModal();
  }
  async ngOnInit() {
    this.container.clear();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    let eventInfos = await this.webService.getEventInfos().then((result)=>{
      result.forEach(element => {
        this.createComponent(element);
      });
    });

   
  }


}
