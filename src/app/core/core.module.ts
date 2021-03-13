import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import {MatTableModule} from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CoreModule { }
