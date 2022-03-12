import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightModule } from 'ngx-highlightjs';

import { MaterialModule } from './matreial.module';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
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
