import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StoryService } from '../services/story.service';

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
