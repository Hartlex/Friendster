import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'calendar' },
    { title: 'Account', url: 'account', icon: 'person' },
    { title: 'Hilfe', url: 'hilfe', icon: 'information-circle' },

  ];
  public labels = [];
  constructor() {}
}
