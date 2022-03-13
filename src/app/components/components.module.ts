import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentPageRoutingModule } from './components-routing.module';
import { ComponentsExamplesModule } from '../components-examples';

import { ComponentNavComponent } from './component-nav/component-nav.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { ComponentExamplesComponent } from './component-examples/component-examples.component';
import { ComponentsCategoriesComponent } from './components-categories/components-categories.component';

@NgModule({
  declarations: [
    ComponentsPageComponent,
    ComponentViewerComponent,
    ComponentOverviewComponent,
    ComponentNavComponent,
    ComponentExamplesComponent,
    ComponentsCategoriesComponent
  ],
  imports: [
    CommonModule,
    ComponentPageRoutingModule,
    ComponentsExamplesModule,
    SharedModule
  ]
})
export class ComponentsModule {
}
