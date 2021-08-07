import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountService } from 'src/app/assets/services/account.service';
import { IconSelectorService } from 'src/app/assets/services/icon-selector.service';
import { WebFacadeService } from 'src/app/assets/services/web-facade.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  public iconPath:string;
  public title:string;
  public subtitle:string;
  public description:string;
  private iconValue:string;
  constructor(private ctrl:ModalController,private iconSelector: IconSelectorService,private dbService:WebFacadeService,private accountService:AccountService) { 
    this.iconPath = "./../../../assets/icon/eventIcons/1.png";
    this.iconValue="1";
  }
  closeModal() {
    this.ctrl.dismiss();
}
  ngOnInit() {
  }
  onIconSelect(value){
    this.iconValue = value;
    this.iconPath = this.iconSelector.getEventIconPath(Number.parseInt(value));
  }
  async onAddEvent(){
    if(this.title!="" && this.subtitle!="" && this.description!=""){
      console.log(this.title);
      console.log(this.subtitle);
      console.log(this.description);
      console.log(this.iconValue);
      let user =await this.accountService.getUser();
      let eventinfo = await this.dbService.createEvent(this.title,this.subtitle,this.description,Number.parseInt(this.iconValue),user.id);
      this.closeModal();
    }
  }
}
