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
        this.imgPath = selector.getUserIconPath(imgId);
    }
    public serialize (){
        return JSON.stringify({
            id:this.id,
            username:this.username,
            imgId:this.imgId.toString(),
            imgPath:this.imgPath,
            description:this.description
        });
    }
    public deserialize(info:string){
        var data = JSON.parse(info);
        this.id = data.id;
        this.username = data.username;
        this.imgId = Number.parseInt(data.imgId);
        let iconSelector = new IconSelectorService();
        this.imgPath = iconSelector.getUserIconPath(this.imgId);
        this.description = data.description;
    }

}
