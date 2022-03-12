import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
