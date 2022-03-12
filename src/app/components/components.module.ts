import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { ComponentNavComponent } from './component-nav/component-nav.component';
import { ComponentExamplesComponent } from './component-examples/component-examples.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentsPageComponent,
    ComponentViewerComponent,
    ComponentOverviewComponent,
    ComponentNavComponent,
    ComponentExamplesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      
    ])
  ]
})
export class ComponentsModule { }
