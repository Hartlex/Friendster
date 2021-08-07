import { Component, OnInit,AfterViewInit, ViewChild,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventInfoContainer } from '../assets/classes/event-info-container';
import {EventItemComponent} from '../../event-item/event-item.component'
import { WebFacadeService } from '../assets/services/web-facade.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  @ViewChild('eventItemContainer',{read: ViewContainerRef,static:true}) container: ViewContainerRef;
  constructor(private activatedRoute: ActivatedRoute, private resolver: ComponentFactoryResolver,private webService:WebFacadeService) { }

  createComponent(info:EventInfoContainer){
    const factory = this.resolver.resolveComponentFactory(EventItemComponent);
    let ref = this.container.createComponent(factory);
    ref.instance.info = info;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    let eventInfos = this.webService.getEventInfos();

    eventInfos.forEach(element => {
      this.createComponent(element);
    });
   
  }


}
