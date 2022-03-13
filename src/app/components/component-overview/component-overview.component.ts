import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DocContentType, DocSegment } from '../components.data';

@Component({
  selector: 'component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentOverviewComponent {

  DocType = DocContentType;

  doc$: Observable<DocSegment[]> = this.activatedRoute.data.pipe(
    map((data: Data) => data['data'].docs)
  );

  constructor(public activatedRoute: ActivatedRoute) {
  }
}
