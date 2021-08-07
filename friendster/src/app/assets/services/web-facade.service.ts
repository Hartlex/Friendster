import { Injectable } from '@angular/core';
import { logging } from 'protractor';


import { EventInfoContainer } from '../classes/event-info-container';
import { User } from '../classes/user';
import { WebFacadeMockDBService } from './web-facade-mock-db.service';

@Injectable({
  providedIn: 'root'
})
export class WebFacadeService {

  constructor(private dbService:WebFacadeMockDBService) {
   }

  public async getEventInfos(){
    let sync = (await this.dbService.IsSynchronized());

    if(!sync){
      this.dbService.SetSynchrnized(true);
      this.getInitialEvents();
    }
    return await this.dbService.getAllEvents();
  }
  public getUser(id:number){
    return this.mockHttpUserRequest(id);
  }
  public getInitialEvents(){
    this.dbService.clear();
    let response = this.mockHttpRequest();
    
    var result = new Array(response.eventCount);
    for(let i=0;i<response.eventCount;i++){
      let raw = response.events[i];
      let inventInfo = new EventInfoContainer();
      inventInfo.id = raw.id;
      inventInfo.text = raw.text;
      inventInfo.title = raw.title;
      inventInfo.setImg(raw.imgId);
      inventInfo.setSubTitle(raw.subTitle);
      inventInfo.setParticipants(raw.participants);
      result[i] = inventInfo;
      this.dbService.setEvent(raw.id,inventInfo);
    }
    return result;
  }
  private mockHttpRequest(){
    return {
      "eventCount":5,
      "events":[
          {
            "id":0,
            "title":"Essen gehen",
            "subTitle":"am besten beim Italiener",
            "imgId":5,
            "text":"Hallo ich würde gerne mit ein paar Leuten zum Italiener, wer hat Lust?",
            "participants":[1]
          },
          {
            "id":1,
            "title":"Grillabend",
            "subTitle":"bei mir zuhause (Adresse gibts über Whatsapp)",
            "imgId":3,
            "text":"Hallo ich würde gerne mit ein paar Leuten zum grillen. Grillgut selbst mitbringen. Für Bier ist gesorgt",
            "participants":[2]
          },
          {
            "id":2,
            "title":"Disco, Disco, Party Party",
            "subTitle":"hallo wer hat bock am Freitag mit in den Club zu gehen?",
            "imgId":6,
            "text":"Hoch die Hände Wochenende",
            "participants":[1,2,3]
          },
          {
            "id":3,
            "title":"Gemütliches Kaffeekränzchen",
            "subTitle":"Hallo Leute, hat jemand Lust auf ein gemütliches Stück Kuchen um einfach ein paar neue Menschen kennen zu lernen?",
            "imgId":8,
            "text":"Ich liebe Kuchen",
            "participants":[3]
          },
          {
            "id":4,
            "title":"Silvester Party",
            "subTitle":"Hallo and Alle, ich suche noch nach ein paar coolen Leuten für meine Silvesterparty!",
            "imgId":2,
            "text":"bin zu faul eine Beschreibung zu machen.",
            "participants":[4]
          }
      ]
    }
  }
  private mockHttpUserRequest(id:number){
    switch (id) {
      case 1:
        return new User(1,"Horst","Hallo ich bin der Horst und ich mag Züge",1)
      case 2:
        return new User(2,"Angela","Angela for Bundeskanzler",2)
      case 3:
        return new User(3,"Armin","Ich lache gerne bei unangemessenen Veranstalltungen",3)
      case 4: 
      return new User(4,"Maggus","Servus i bin der Maggus und hab scho 2 Maß intuss",4)
    }
  }
  public async createEvent(title:string,subTitle:string,description:string,iconId:number){
    let id = (await this.dbService.GetFreeId());
    let event = new EventInfoContainer();
    event.id=id;
    event.title = title,
    event.subTitle = subTitle;
    event.text = description;
    event.setImg(iconId);
    event.participants = new Array(0);
    this.dbService.setEvent(id,event);
    return event;
  }

}

