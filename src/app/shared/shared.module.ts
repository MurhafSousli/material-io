import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightModule } from 'ngx-highlightjs';

import { MaterialModule } from '../material/matreial.module';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer.pipe';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ErrorComponent,
    HtmlSanitizerPipe,
    ExampleViewerComponent,
    DocViewerComponent,
    CodeSnippetComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    PortalModule,
    FontAwesomeModule,
    HighlightModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    HighlightModule,
    NavbarComponent,
    ErrorComponent,
    HtmlSanitizerPipe,
    ExampleViewerComponent,
    DocViewerComponent,
    CodeSnippetComponent,
    FooterComponent
  ]
})
export class SharedModule {
 }
