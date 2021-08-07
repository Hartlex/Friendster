import { isNull } from "@angular/compiler/src/output/output_ast";
import { IconSelectorService } from "../services/icon-selector.service";
import { WebFacadeMockDBService } from "../services/web-facade-mock-db.service";
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

    /**public constructor(id:number,title:string,text:string){
        this.id = id;
        this.title = title;
        this.text = text;
    }**/
    //public constructor(info:string){
    //  this.deserialize(info);
    //}
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
    public serialize (){
        return JSON.stringify({
            id:this.id,
            title:this.title,
            img:this.img,
            subTitle:this.subTitle,
            text:this.text,
            participants:this.participants,
            imgPath:this.imgPath
        });
    }
    public deserialize(info:string){
        var data = JSON.parse(info);
        this.id = data.id;
        this.title = data.title;
        this.img = data.img;
        this.subTitle = data.subTitle;
        this.text = data.text;
        this.participants = data.participants;
        this.imgPath = data.imgPath;
    }
}

