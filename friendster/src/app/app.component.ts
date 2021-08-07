import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'mail' },
    { title: 'Account', url: 'account', icon: 'mail' },
    { title: 'Hilfe', url: 'hilfe', icon: 'mail' },

  ];
  public labels = [];
  constructor() {}
}
