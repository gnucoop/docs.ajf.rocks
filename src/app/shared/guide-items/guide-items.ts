import {Injectable} from '@angular/core';

export interface GuideItem {
  id: string;
  name: string;
  document: string;
  overview: string;
}

const GUIDES = [
  {
    id: 'getting-started',
    name: 'Getting started',
    document: '/docs-content/guides/getting-started.html',
    overview: 'Add Ajf to your project!'
  },
];

@Injectable()
export class GuideItems {
  getAllItems(): GuideItem[] {
    return GUIDES;
  }

  getItemById(id: string): GuideItem|undefined {
    return GUIDES.find(i => i.id === id);
  }
}
