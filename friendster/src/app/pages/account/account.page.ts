import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  constructor(private accountService:AccountService,private iconSelector:IconSelectorService,private toaster:ToastController) { }

  async ngOnInit() {
    let user = await this.accountService.getUser();
    this.username = user.username;
    this.description = user.description;
    this.iconValue = user.imgId;
    this.iconPath = await this.iconSelector.getUserIconPath(user.imgId);
    
  }
  async onIconSelect(value){
    this.iconValue = Number.parseInt(value);
    this.iconPath = await this.iconSelector.getUserIconPath(this.iconValue);
    console.log(this.iconPath);
  }
  async onSaveBtn(){
    this.accountService.updateUser(this.username,this.description,this.iconValue);
    const toast = await this.toaster.create({
      message: 'Die Accountinformationen wurden gespeichert!',
      duration: 2000
    });
    toast.present();
  }

}
