import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// =================
// START OF ICONS
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
// END OF ICONS
// =================

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoryRoute } from './components/components.data';
import { MetabookModule } from './metabook/metabook.module';
import { ExampleTitleComponent } from './components-examples';

const metabookRoutes: StoryRoute[] = [
  {
    title: 'Example Title',
    path: 'example-title'
  },
  {
    title: 'Example Paragraph',
    path: 'example-paragraph'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MetabookModule.forRoot({
      routes: metabookRoutes,
      markdownDirPath: 'assets/docs',
      documentationPath: 'assets/docs/documentation.json',
      components: [
        ExampleTitleComponent
      ]
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTwitter, faGithub, faExternalLinkAlt);
  }
}
