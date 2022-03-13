import { Inject, Injectable, Optional } from '@angular/core';
import { METABOOK_CONFIG, MetabookConfig } from '../components/services/metabook.model';

@Injectable({
  providedIn: 'root'
})
export class MetabookService {

  config: MetabookConfig = {
    routes: [],
    components: [],
    markdownDirPath: 'assets/docs',
    documentationPath: 'assets/docs/documentation.json',
  };

  constructor(@Optional() @Inject(METABOOK_CONFIG) config: MetabookConfig) {
    this.config = { ...this.config, ...config };
  }
}
