import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { EventInfoContainer } from '../classes/event-info-container';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class WebFacadeMockDBService {

  constructor() {

   }

  public setEvent(id:number,info:EventInfoContainer){
    Storage.set({key:"EVENT"+id,value:info.serialize()});
  }
  public async getEvent(id:number){
    return Storage.get({key:"EVENT"+id}).then(data=>{
      console.log("DATA:" +data.value);
      var info = new EventInfoContainer();
      info.deserialize(data.value);
      return info;
    },error=>{
      console.log(error);
      return null;
    });
  }
  public async getEventFromStr(str:string){
    return await Storage.get({key:str}).then(data=>{

      var info = new EventInfoContainer();
      info.deserialize(data.value);
      return info;
    },error=>{
      console.log(error);
      return null;
    });
  }
  public async getAllEvents(){
    let keys: Array<string> = (await Storage.keys()).keys;
    var result = new Array(0);
    for(let item of keys){
      if(item.includes("EVENT")){
        let event = await this.getEventFromStr(item);
        result.push(event);
      }
    }
    return result;
    
  }
  public async clear(){
    await Storage.clear;
  }
  public async  SetSynchrnized(value:boolean){
    let val = value ? "1":"0";
    Storage.set({key:"synchronized",value:val});
  }
  public async IsSynchronized(){
    let sync = (await Storage.get({key:"synchronized"}));
    return sync.value ==="1";
  }
  public async GetFreeId(){
    let keys: Array<string> = (await Storage.keys()).keys;
    let id:number =0;
    while(true){
      for(let key of keys){
        if(key.includes("EVENT")){
          if("EVENT"+id !=key) return id;
          id++;
        }
      }
    }
  }

  public async GetUser(){
    let user = (await Storage.get({key:"localUser"})).value;
    if(user==null){
      return new User(999,"Neuer User","Ich bin ein neuer User",1);
    }
    else {
      let data = JSON.parse(user);
      return new User(data.id,data.username,data.description,Number.parseInt(data.imgId));
    }
  }
  public async SetLocalUser(user:User){
    Storage.set({key:"localUser", value:user.serialize()});
  }

}
