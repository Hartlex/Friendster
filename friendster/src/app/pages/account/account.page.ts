import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Console } from 'console';
import { User } from 'src/app/assets/classes/user';
import { AccountService } from 'src/app/assets/services/account.service';
import { IconSelectorService } from 'src/app/assets/services/icon-selector.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  username:string;
  description:string;
  iconPath:string;
  iconValue:number;
  constructor(private accountService:AccountService,private iconSelector:IconSelectorService) { }

  async ngOnInit() {
    let user = await this.accountService.getUser();
    this.username = user.username;
    this.description = user.description;
    this.iconPath =this.iconSelector.getUserIconPath(user.imgId);
    
  }
  onIconSelect(value){
    this.iconValue = Number.parseInt(value);
    this.iconPath = this.iconSelector.getUserIconPath(this.iconValue);
  }
  onSaveBtn(){
    this.accountService.updateUser(this.username,this.description,this.iconValue);
  }

}
