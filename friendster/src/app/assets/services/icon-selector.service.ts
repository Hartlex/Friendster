import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { resourceLimits } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class IconSelectorService {
  
  constructor(private http:HttpClient) { }
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
  public async getUserIconPath(id:number){
    return String(await this.getPathFromWeb(id));
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
  private async getPathFromWeb(id:number){

    let response = await this.http.get<JSON>('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/'+id+'.json', {observe:"response"}).toPromise();
    let obj = JSON.stringify(response.body);
    var js = JSON.parse(obj);
    return String(js.image);
    

  }
}
