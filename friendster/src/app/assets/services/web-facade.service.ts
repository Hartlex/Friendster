import { Injectable } from '@angular/core';

import { EventInfoContainer } from '../classes/event-info-container';

@Injectable({
  providedIn: 'root'
})
export class WebFacadeService {

  constructor() { }

  public getEventInfos(){
    let response = this.mockHttpRequest();

    var result = new Array(response.eventCount);
    for(let i=0;i<response.eventCount;i++){
      let raw = response.events[i];
      let inventInfo = new EventInfoContainer(raw.id,raw.title,raw.text);
      inventInfo.setImg(raw.imgId);
      inventInfo.setSubTitle(raw.subTitle);
      result[i] = inventInfo;
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
            "participants":[1,5,7]
          },
          {
            "id":1,
            "title":"Grillabend",
            "subTitle":"bei mir zuhause (Adresse gibts über Whatsapp)",
            "imgId":3,
            "text":"Hallo ich würde gerne mit ein paar Leuten zum grillen. Grillgut selbst mitbringen. Für Bier ist gesorgt",
            "participants":[1,5,7]
          },
          {
            "id":2,
            "title":"Disco, Disco, Party Party",
            "subTitle":"hallo wer hat bock am Freitag mit in den Club zu gehen?",
            "imgId":6,
            "text":"Hoch die Hände Wochenende",
            "participants":[1,5,7]
          },
          {
            "id":3,
            "title":"Gemütliches Kaffeekränzchen",
            "subTitle":"Hallo Leute, hat jemand Lust auf ein gemütliches Stück Kuchen um einfach ein paar neue Menschen kennen zu lernen?",
            "imgId":8,
            "text":"Ich liebe Kuchen",
            "participants":[1,5,7]
          },
          {
            "id":4,
            "title":"Silvester Party",
            "subTitle":"Hallo and Alle, ich suche noch nach ein paar coolen Leuten für meine Silvesterparty!",
            "imgId":2,
            "text":"bin zu faul eine Beschreibung zu machen.",
            "participants":[1,5,7]
          }
      ]
    }
  }
}

