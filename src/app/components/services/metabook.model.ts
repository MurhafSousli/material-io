import { InjectionToken } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal/portal';
import { DocContentType, StoryRoute } from '../components.data';

export interface MetabookConfig {
  routes: StoryRoute[];
  components: ComponentType<unknown>[];
  markdownDirPath: string;
  documentationPath: string;
}

export interface ComponentData {
  title: string;
  docs?: DocSegment[];
}

export interface StoryComponent {
  path: string;
  component: ComponentType<unknown>;
}

export interface StoryComponent {
  component: ComponentType<unknown>;
  files?: {
    language: string;
    code: string;
  }[];
}

export interface DocSegment {
  type: DocContentType;
  name?: string;
  content: ComponentType<unknown> | string;
}

export const METABOOK_CONFIG = new InjectionToken<MetabookConfig>('METABOOK_CONFIG');
