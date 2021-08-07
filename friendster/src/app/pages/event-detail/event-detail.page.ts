import { AfterContentInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventInfoContainer } from 'src/app/assets/classes/event-info-container';
import { User } from 'src/app/assets/classes/user';
import { AccountService } from 'src/app/assets/services/account.service';
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

  public joinLeaveBtnTxt:string = "Mitmachen";
  private isJoined:boolean=false;
  constructor(private resolver: ComponentFactoryResolver,private ctrl:ModalController,private mockDB:WebFacadeService,private accService:AccountService) { }
  async ngAfterContentInit() {
    this.container.clear();
    this.users = await this.getParticipants();
    this.users.forEach(element => {
      console.log(element);
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
  async onJoinLeave(){
    
    if(this.isJoined)
    {   
      this.setJoined(false);
      await this.leave();
    }
    else
    {
      this.setJoined(true);
      await this.join();
    }
    
    this.info = await this.mockDB.getEventInfo(this.info.id);
    this.ngAfterContentInit();
  }
  private async join(){
    console.log("join");
    let user = await this.accService.getUser();
    await this.mockDB.UserJoinEvent(user.id,this.info.id);
    
  }
  private async leave(){
    console.log("leave");
    let user = await this.accService.getUser();
    await this.mockDB.UserLeaveEvent(user.id,this.info.id);
  }
  private setJoined(value:boolean){
    this.isJoined = value;
    this.joinLeaveBtnTxt = this.isJoined? "Verlassen": "Mitmachen";
  }
  private async getParticipants(){
    let result = new Array(this.info.participants.length);
    for (let i = 0; i < this.info.participants.length; i++) {
        const element = this.info.participants[i];
        if(element ===999){
          result[i] = await this.accService.getUser();
          this.setJoined(true);
        }
        else{
        const user = this.mockDB.getUser(element);
        result[i] = user;
      }

    }
    return result;
}
  
}
