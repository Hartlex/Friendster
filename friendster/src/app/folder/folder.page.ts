import { Component, OnInit,AfterViewInit, ViewChild,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventItemComponent} from './../../event-item/event-item.component'


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  @ViewChild('eventItemContainer',{read: ViewContainerRef,static:true}) container: ViewContainerRef;
  constructor(private activatedRoute: ActivatedRoute, private resolver: ComponentFactoryResolver) { }

  createComponent(){
  
    const factory = this.resolver.resolveComponentFactory(EventItemComponent);
    this.container.createComponent(factory);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    for (let i = 0; i < 20 ; i++) {
      this.createComponent();
      
    }
   
  }


}
