import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPageComponent {

  readonly title$: Observable<string> = this.activatedRoute.firstChild.firstChild.data.pipe(
    map((data: Data) => data['data']?.title)
  );

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
