import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
})
export class UserOverviewComponent implements OnInit {
  public info:User;
  constructor() { }

  ngOnInit() {}

}
