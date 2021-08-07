import { IconSelectorService } from "../services/icon-selector.service";
import { User } from "./user";


export class EventInfoContainer {
    private id:number;
    private title:string;
    private img: number;
    private subTitle:string;
    private text:string;
    private participants:User[];
    private imgPath:string;

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

