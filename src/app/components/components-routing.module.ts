import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { ComponentExamplesComponent } from './component-examples/component-examples.component';
import { ComponentResolver } from './resolver/component.resolver';
import { ComponentsCategoriesComponent } from './components-categories/components-categories.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ComponentsPageComponent,
        children: [
          {
            path: 'categories',
            component: ComponentsCategoriesComponent
          },
          {
            path: '',
            component: ComponentViewerComponent,
            children: [
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
              },
              {
                path: '**',
                redirectTo: 'categories'
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
