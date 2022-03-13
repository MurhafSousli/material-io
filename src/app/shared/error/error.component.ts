import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'metabook-error',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
}
