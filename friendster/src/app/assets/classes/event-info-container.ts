import { isNull } from "@angular/compiler/src/output/output_ast";
import { IconSelectorService } from "../services/icon-selector.service";
import { WebFacadeService } from "../services/web-facade.service";
import { User } from "./user";


export class EventInfoContainer {
    public id:number;
    public title:string;
    public img: number;
    public subTitle:string;
    public text:string;
    public participants:number[];
    public imgPath:string;

    public constructor(id:number,title:string,text:string){
        this.id = id;
        this.title = title;
        this.text = text;
    }
    public setImg(id:number){
        this.img =id;
        let selector = new IconSelectorService();
        this.imgPath = selector.getEventIconPath(id);
    }
    public setSubTitle(subTitle:string){
        this.subTitle = subTitle;
    }
    public setParticipants(participants:number[]){
        this.participants = participants;
    }
    public getParticipants(){
        let result = new Array(this.participants.length);
        for (let i = 0; i < this.participants.length; i++) {
            const element = this.participants[i];
            const service = new WebFacadeService();
            const user = service.getUser(element);
            result[i] = user;
        }
        return result;
    }
}

