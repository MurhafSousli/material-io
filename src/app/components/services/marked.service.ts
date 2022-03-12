import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { marked } from 'marked';
import { map, Observable } from 'rxjs';
import { highlightCodeBlock } from './highlight-code-block';
import { STORY_CONFIG, StoryConfig } from '../story';
import { DocsMarkdownRenderer } from './docs-marked-renderer';

@Injectable({
  providedIn: 'root'
})
export class MarkedService {

  constructor(@Inject(STORY_CONFIG) private config: StoryConfig, private http: HttpClient) {

    // Custom markdown renderer for transforming markdown files for the docs.
    const markdownRenderer = new DocsMarkdownRenderer();

    // Set highlight.js in marked
    marked.setOptions({ renderer: markdownRenderer, highlight: highlightCodeBlock });
  }

  getMarkDownHtml(name: string): Observable<string> {
    return this.http.get(`${ this.config.markdownDirPath }/${ name }.md`, { responseType: 'text' }).pipe(
      map((res: string) => marked.parse(res))
    );
  }
}
