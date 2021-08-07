import { AfterContentInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventInfoContainer } from 'src/app/assets/classes/event-info-container';
import { User } from 'src/app/assets/classes/user';
import { WebFacadeService } from 'src/app/assets/services/web-facade.service';
import { UserOverviewComponent } from 'src/app/assets/templates/user-overview/user-overview.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit,AfterContentInit {
  @ViewChild('userList',{read: ViewContainerRef,static:true}) container: ViewContainerRef;
  users: User[];
  @Input() info:EventInfoContainer;
  constructor(private resolver: ComponentFactoryResolver,private ctrl:ModalController,private mockDB:WebFacadeService) { }
  ngAfterContentInit(): void {
    this.users = this.getParticipants();
    this.users.forEach(element => {
      this.createComponent(element);
    });
  }
  closeModal() {
    this.ctrl.dismiss();
}
  createComponent(info:User){
    const factory = this.resolver.resolveComponentFactory(UserOverviewComponent);
    let ref = this.container.createComponent(factory);
    ref.instance.info = info;
  }
  ngOnInit() {

  }
  private getParticipants(){
    let result = new Array(this.info.participants.length);
    for (let i = 0; i < this.info.participants.length; i++) {
        const element = this.info.participants[i];
        const user = this.mockDB.getUser(element);
        result[i] = user;
    }
    return result;
}
  
}
