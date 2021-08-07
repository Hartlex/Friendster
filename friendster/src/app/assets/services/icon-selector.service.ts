import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconSelectorService {
  
  constructor() { }
  public getEventIconPath(id:number){
    switch (id) {
      case 1:
        return "./../../../assets/icon/eventIcons/1.png";
      case 2:
        return "./../../../assets/icon/eventIcons/2.png";
      case 3:
        return "./../../../assets/icon/eventIcons/3.png";
      case 4:
        return "./../../../assets/icon/eventIcons/4.png";
      case 5:
        return "./../../../assets/icon/eventIcons/5.png";
      case 6:
        return "./../../../assets/icon/eventIcons/6.png";
      case 7:
        return "./../../../assets/icon/eventIcons/7.png";
      case 8:
        return "./../../../assets/icon/eventIcons/8.png";
      case 9:
        return "./../../../assets/icon/eventIcons/9.png";
      default:
        break;
    }
  }
  public getUserIconPath(id:number){
    switch (id) {
      case 1:
        return "./../../../assets/icon/userIcons/1.png";
      case 2:
        return "./../../../assets/icon/userIcons/2.png";
      case 3:
        return "./../../../assets/icon/userIcons/3.png";
      case 4:
        return "./../../../assets/icon/userIcons/4.png";
      case 5:
        return "./../../../assets/icon/userIcons/5.png";
      case 6:
        return "./../../../assets/icon/userIcons/6.png";
      case 7:
        return "./../../../assets/icon/userIcons/7.png";
      case 8:
        return "./../../../assets/icon/userIcons/8.png";

      default:
        break;
    }
  }
}
