import { IconSelectorService } from "../services/icon-selector.service";

export class User {
    public id:number;
    public username:string;
    public imgId:number;
    public imgPath:string;
    public description:string;

    constructor(id:number,username:string,description:string,imgId:number){
        this.id = id;
        this.username = username;
        this.description = description;
        this.imgId = imgId;
        let selector = new IconSelectorService();
        this.imgPath = selector.getUserIconPath(id);
    }

}
