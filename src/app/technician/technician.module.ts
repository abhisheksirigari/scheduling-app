import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarUtilsModule } from '../technician/components/calendar-utils/module';
import { ContextMenuModule } from 'ngx-contextmenu';

import { TechnicianRoutingModule } from './technician.routing';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TechHeaderComponent } from './components/tech-header/tech-header.component';
import { TechSidebarComponent } from './components/tech-sidebar/tech-sidebar.component';
import { TechScheduleComponent } from './components/tech-schedule/tech-schedule.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TechnicianRoutingModule,
    CalendarModule.forRoot(),
    ContextMenuModule.forRoot({useBootstrap4: true}),
    CalendarUtilsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [DashboardComponent, TechHeaderComponent, TechSidebarComponent, TechScheduleComponent]
})
export class TechnicianModule {

}