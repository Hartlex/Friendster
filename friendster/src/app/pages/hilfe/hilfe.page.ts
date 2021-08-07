import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { WebFacadeService } from 'src/app/assets/services/web-facade.service';

@Component({
  selector: 'app-hilfe',
  templateUrl: './hilfe.page.html',
  styleUrls: ['./hilfe.page.scss'],
})
export class HilfePage implements OnInit {

  constructor(private mockDB:WebFacadeService,private toaster:ToastController) { }

  ngOnInit() {
  }
  onResetClick(){
    this.showDeleteToast();
  }
  async showDeleteToast() {
    const toast = await this.toaster.create({
      header: 'Zürücksetzen',
      message: 'Möchten sie die komplette App zurücksetzen?',
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'Löschen',
          handler: async () => {
            await this.mockDB.resetDatabase();
            window.location.reload();
          }
        }, {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
