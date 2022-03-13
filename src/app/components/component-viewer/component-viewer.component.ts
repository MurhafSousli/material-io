import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ComponentData } from '../components.data';

@Component({
  selector: 'component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentViewerComponent {

  paramName$: Observable<string> = this.activatedRoute.firstChild.paramMap.pipe(
    map((params: ParamMap) => params.get('name'))
  );

  data$: Observable<ComponentData> = this.activatedRoute.firstChild.data.pipe(
    map((data: Data) => data['data'])
  );

  links: string[] = [
    'overview',
    'api',
    'examples'
  ];

  constructor(private activatedRoute: ActivatedRoute) {
  }

}
