import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailPageRoutingModule } from './event-detail-routing.module';

import { EventDetailPage } from './event-detail.page';
import { UserOverviewComponent } from 'src/app/assets/templates/user-overview/user-overview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailPageRoutingModule,

    
  ],
  declarations: [EventDetailPage,UserOverviewComponent]
})
export class EventDetailPageModule {}
