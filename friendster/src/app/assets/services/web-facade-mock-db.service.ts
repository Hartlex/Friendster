import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { EventInfoContainer } from '../classes/event-info-container';
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


}
