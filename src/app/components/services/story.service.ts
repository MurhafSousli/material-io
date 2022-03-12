import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentType } from '@angular/cdk/portal/portal';
import { BehaviorSubject, filter, Observable, take, tap } from 'rxjs';
import { StoryRoute } from '../components.data';
import { StoryConfig, STORY_CONFIG } from './metabook.model';
import { CompoDoc } from './compodoc.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private readonly _docSource = new BehaviorSubject<CompoDoc | unknown>(null);

  readonly documentation: Observable<CompoDoc> = this._docSource.pipe(
    filter((docs: CompoDoc) => !!docs),
    take(1)
  );

  readonly routes: Record<string, StoryRoute>;

  readonly stories: Record<string, ComponentType<unknown>>;

  constructor(@Optional() @Inject(STORY_CONFIG) config: StoryConfig, private http: HttpClient) {
    // Load CompoDoc documentation
    this.http.get<CompoDoc>(config.documentationPath).pipe(
      tap((res: CompoDoc) => this._docSource.next(res))
    ).subscribe();

    this.routes = config.routes.reduce((total: Record<string, StoryRoute>, route: StoryRoute) => {
      return {
        ...total,
        [route.path]: route
      };
    }, {});

    this.stories = config.components.reduce((total: Record<string, ComponentType<unknown>>, cmp: ComponentType<unknown>) => {
      return {
        ...total,
        [cmp.name]: cmp
      };
    }, {});
  }
}
