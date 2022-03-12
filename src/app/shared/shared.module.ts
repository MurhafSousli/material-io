import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightModule } from 'ngx-highlightjs';

import { MaterialModule } from '../material/matreial.module';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule,
    HighlightModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    HighlightModule,
    NavbarComponent
  ]
})
export class SharedModule {
 }
