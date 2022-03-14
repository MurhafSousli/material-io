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
  StoryRoute, ComponentExampleFile
} from '../components.data';
import { MarkedService } from '../services/marked.service';
import { StoryService } from '../services/story.service';
import { CompoDoc, ComponentDoc } from '../services/compodoc.model';

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
            catchError(() => of({ title: data.title, error: `Markdown file "${ data.path }.md" was not found!"` }))
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
      const componentData: ComponentDoc = docs.components.find((cmp: ComponentDoc) => cmp.name === component.name);

      const files: ComponentExampleFile[] = [];
      if (componentData) {
        // Add component source code
        addFile(files, 'ts',componentData.sourceCode);
        // Add template source code
        addFile(files, 'html',componentData.templateData);
        // Add styles source code
        addFile(files, 'scss',componentData.styleUrlsData[0]?.data);
      }
      return {
        files,
        component: new ComponentPortal(component)
      };
    }
    return null;
  }
}

function addFile(files: ComponentExampleFile[], language: string, code: string): void {
  if (code) {
    files.push({ language, code });
  }
}
