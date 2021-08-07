import { User } from "./user";


export class EventInfoContainer {
    private id:number;
    private title:string;
    private img: ImageBitmap;
    private subTitle:string;
    private text:string;
    private participants:User[];

    public constructor(id:number,title:string,text:string){
        this.id = id;
        this.title = title;
        this.text = text;
    }
    public setImg(id:number){

    }
    public setSubTitle(subTitle:string){
        this.subTitle = subTitle;
    }
}

