import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentPageRoutingModule } from './components-routing.module';

import { ComponentNavComponent } from './component-nav/component-nav.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { ComponentExamplesComponent } from './component-examples/component-examples.component';

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
    ComponentPageRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule {
}
