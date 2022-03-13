import { ModuleWithProviders, NgModule } from '@angular/core';
import { METABOOK_CONFIG, MetabookConfig } from '../components/services/metabook.model';

@NgModule()
export class MetabookModule {
  static forRoot(config?: MetabookConfig): ModuleWithProviders<MetabookModule> {
    return {
      ngModule: MetabookModule,
      providers: [
        {
          provide: METABOOK_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
