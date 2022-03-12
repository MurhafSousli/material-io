import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { ComponentExamplesComponent } from './component-examples/component-examples.component';
import { ComponentResolver } from './resolver/component.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ComponentsPageComponent,
        children: [
          {
            path: '',
            component: ComponentViewerComponent,
            children: [
              {
                path: '',
                redirectTo: 'carousel'
              },
              {
                path: ':name',
                children: [
                  {
                    path: '',
                    redirectTo: 'overview'
                  },
                  {
                    path: 'overview',
                    component: ComponentOverviewComponent
                  },
                  {
                    path: 'api',
                    component: ComponentOverviewComponent
                  },
                  {
                    path: 'examples',
                    component: ComponentExamplesComponent
                  }
                ],
                resolve: {
                  data: ComponentResolver
                }
              }
            ]
          }
        ]
      }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentPageRoutingModule {
}
