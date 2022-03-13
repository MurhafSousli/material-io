import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentType } from '@angular/cdk/portal/portal';
import { BehaviorSubject, filter, Observable, take, tap } from 'rxjs';
import { StoryRoute } from '../components.data';
import { CompoDoc } from './compodoc.model';
import { MetabookService } from '../../metabook/metabook.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private readonly _docSource = new BehaviorSubject<CompoDoc>(null);

  readonly documentation: Observable<CompoDoc> = this._docSource.pipe(
    filter((docs: CompoDoc) => !!docs),
    take(1)
  );

  readonly routes: Record<string, StoryRoute>;

  readonly stories: Record<string, ComponentType<unknown>>;

  constructor(metabook: MetabookService, private http: HttpClient) {
    // Load CompoDoc documentation
    this.http.get<CompoDoc>(metabook.config.documentationPath).pipe(
      tap((res: CompoDoc) => this._docSource.next(res))
    ).subscribe();

    this.routes = metabook.config.routes.reduce((total: Record<string, StoryRoute>, route: StoryRoute) => {
      return {
        ...total,
        [route.path]: route
      };
    }, {});

    this.stories = metabook.config.components.reduce((total: Record<string, ComponentType<unknown>>, cmp: ComponentType<unknown>) => {
      return {
        ...total,
        [cmp.name]: cmp
      };
    }, {});
  }
}
