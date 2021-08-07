import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { WebFacadeService } from './web-facade.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private user:User;

  constructor(private webfacade:WebFacadeService) {
    this.user = new User(999,"Neuer User","Ich bin ein neuer User",1);
   }

  public updateUser(userName:string,description:string,imgId:number){
    let user = new User(999,userName,description,imgId);
    this.webfacade.setLocalUser(user);
    
  }
  public async getUser(){
    return await this.webfacade.getLocalUser();
  }

}
