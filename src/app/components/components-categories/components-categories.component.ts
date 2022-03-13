import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'metabook-components-categories',
  templateUrl: './components-categories.component.html',
  styleUrls: ['./components-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
