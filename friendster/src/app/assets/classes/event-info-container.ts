import { IconSelectorService } from "../services/icon-selector.service";
import { User } from "./user";


export class EventInfoContainer {
    public id:number;
    public title:string;
    public img: number;
    public subTitle:string;
    public text:string;
    public participants:User[];
    public imgPath:string;

    public constructor(id:number,title:string,text:string){
        this.id = id;
        this.title = title;
        this.text = text;
    }
    public setImg(id:number){
        this.img =id;
        let selector = new IconSelectorService();
        this.imgPath = selector.getImagePath(id);
    }
    public setSubTitle(subTitle:string){
        this.subTitle = subTitle;
    }
}

