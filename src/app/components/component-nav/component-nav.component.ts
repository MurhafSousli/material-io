import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentNavComponent {

  constructor(public story: StoryService) {
  }

}
