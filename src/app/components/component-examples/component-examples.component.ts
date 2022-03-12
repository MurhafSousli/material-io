import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DocSegment, DocContentType } from '../components.data';

@Component({
  selector: 'component-examples',
  templateUrl: './component-examples.component.html',
  styleUrls: ['./component-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentExamplesComponent {

  examples$: Observable<DocSegment[]> = this.activatedRoute.data.pipe(
    map((data: Data) => {
      return data.data.docs.filter((segment: DocSegment) => segment.type === DocContentType.Component);
    })
  );

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
