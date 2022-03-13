import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentType } from '@angular/cdk/portal/portal';
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import {
  ComponentData,
  ComponentExampleData,
  DocSegment,
  DocContentType,
  StoryRoute
} from '../components.data';
import { MarkedService } from '../services/marked.service';
import { StoryService } from '../services/story.service';
import { CompoDoc } from '../services/compodoc.model';

const exampleCommentRegex = /<!--\s*example\(([^)]+)\)\s*-->/g;

@Injectable({
  providedIn: 'root'
})
export class ComponentResolver implements Resolve<ComponentData> {

  constructor(private marked: MarkedService, private story: StoryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComponentData> {
    const data: StoryRoute = this.story.routes[<string>route.paramMap.get('name')];
    if (data) {
      return this.story.documentation.pipe(
        switchMap((docs: CompoDoc) => {
          return this.marked.getMarkDownHtml(data.path).pipe(
            map((html: string) => {
              return {
                title: data.title,
                docs: this.getDoc(html, docs)
              };
            }),
            catchError(() => throwError(() => ({ title: data.title })))
          );
        })
      );
    }
    return of(null);
  }

  getDoc(doc: string, docs: CompoDoc): DocSegment[] {
    return doc.split(exampleCommentRegex).map((content: string, i: number) => {
      if (i % 2 === 0) {
        return {
          type: DocContentType.Markdown,
          content
        };
      }
      return {
        type: DocContentType.Component,
        name: content,
        content: this.getComponent(content, docs)
      };
    });
  }

  getComponent(key: string, docs: CompoDoc): ComponentExampleData {
    const component: ComponentType<unknown> = this.story.stories[key];
    if (component) {
      const componentData = docs.components.find((cmp) => cmp.name === component.name);

      return {
        component: new ComponentPortal(component),
        files: [
          {
            language: 'ts',
            code: componentData.sourceCode
          },
          {
            language: 'html',
            code: componentData.templateData
          },
          {
            language: 'scss',
            code: componentData.styleUrlsData[0].data
          }
        ]
      };
    }
    return null;
  }

}
