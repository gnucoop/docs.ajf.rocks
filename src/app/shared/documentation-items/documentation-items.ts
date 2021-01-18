import {EXAMPLE_COMPONENTS} from '@ajf/ajf-examples';
import {Injectable} from '@angular/core';

export interface AdditionalApiDoc {
  name: string;
  path: string;
}

export interface ExampleSpecs {
  prefix: string;
  exclude?: string[];
}

export interface DocItem {
  /** Id of the doc item. Used in the URL for linking to the doc. */
  id: string;
  /** Display name of the doc item. */
  name: string;
  /** Short summary of the doc item. */
  summary?: string;
  /** Package which contains the doc item. */
  packageName?: string;
  /** Specifications for which examples to be load. */
  exampleSpecs: ExampleSpecs;
  /** List of examples. */
  examples?: string[];
  /** Optional id of the API document file. */
  apiDocId?: string;
  /** Optional path to the overview file of this doc item. */
  overviewPath?: string;
  /** List of additional API docs. */
  additionalApiDocs?: AdditionalApiDoc[];
}

export interface DocSection {
  name: string;
  summary: string;
}

const exampleNames = Object.keys(EXAMPLE_COMPONENTS);
const CORE = 'core';
const MATERIAL = 'material';
const IONIC = 'ionic';
export const SECTIONS: {[key: string]: DocSection} = {
  [MATERIAL]:
      {name: 'Material', summary: 'Ajf components for Angular Material UI'},
  [IONIC]: {name: 'Ionic', summary: 'Ajf components for Ionic'},
  [CORE]: {name: 'Core', summary: 'Base Ajf components and services'},
};

const DOCS: {[key: string]: DocItem[]} = {
  [MATERIAL]: [
    {
      id: 'barcode',
      name: 'Barcode',
      summary: '',
      exampleSpecs: {
        prefix: 'barcode-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'calendar',
      name: 'Calendar',
      summary: '',
      exampleSpecs: {
        prefix: 'calendar-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'checkbox-group',
      name: 'Checkbox group',
      summary: '',
      exampleSpecs: {
        prefix: 'checkbox-group-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'form-builder',
      name: 'Form builder',
      summary: '',
      exampleSpecs: {
        prefix: 'form-builder-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'forms',
      name: 'Forms',
      summary: '',
      exampleSpecs: {
        prefix: 'forms-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'image',
      name: 'Image',
      summary: '',
      exampleSpecs: {
        prefix: 'image-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'monaco-editor',
      name: 'Monaco editor',
      summary: '',
      exampleSpecs: {
        prefix: 'monaco-editor-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'node-icon',
      name: 'Node icon',
      summary: '',
      exampleSpecs: {
        prefix: 'node-icon-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'page-slider',
      name: 'Page slider',
      summary: '',
      exampleSpecs: {
        prefix: 'page-slider-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'report-builder',
      name: 'Report builder',
      summary: '',
      exampleSpecs: {
        prefix: 'report-builder-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'reports',
      name: 'Reports',
      summary: '',
      exampleSpecs: {
        prefix: 'reports-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'time',
      name: 'Time',
      summary: '',
      exampleSpecs: {
        prefix: 'time-',
      },
      additionalApiDocs: [],
    },
  ],
  [IONIC]: [
    {
      id: 'barcode',
      name: 'Barcode',
      summary: '',
      exampleSpecs: {
        prefix: 'barcode-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'calendar',
      name: 'Calendar',
      summary: '',
      exampleSpecs: {
        prefix: 'calendar-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'checkbox-group',
      name: 'Checkbox group',
      summary: '',
      exampleSpecs: {
        prefix: 'checkbox-group-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'forms',
      name: 'Forms',
      summary: '',
      exampleSpecs: {
        prefix: 'forms-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'image',
      name: 'Image',
      summary: '',
      exampleSpecs: {
        prefix: 'image-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'node-icon',
      name: 'Node icon',
      summary: '',
      exampleSpecs: {
        prefix: 'node-icon-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'page-slider',
      name: 'Page slider',
      summary: '',
      exampleSpecs: {
        prefix: 'page-slider-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'reports',
      name: 'Reports',
      summary: '',
      exampleSpecs: {
        prefix: 'reports-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'time',
      name: 'Time',
      summary: '',
      exampleSpecs: {
        prefix: 'time-',
      },
      additionalApiDocs: [],
    },
  ],
  [CORE]: [
    {
      id: 'barcode',
      name: 'Barcode',
      summary: '',
      exampleSpecs: {
        prefix: 'barcode-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'calendar',
      name: 'Calendar',
      summary: '',
      exampleSpecs: {
        prefix: 'calendar-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'chart',
      name: 'Chart',
      summary: '',
      exampleSpecs: {
        prefix: 'chart-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'checkbox-group',
      name: 'Checkbox group',
      summary: '',
      exampleSpecs: {
        prefix: 'checkbox-group-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'common',
      name: 'Common',
      summary: '',
      exampleSpecs: {
        prefix: 'common-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'file-input',
      name: 'File input',
      summary: '',
      exampleSpecs: {
        prefix: 'file-input-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'forms',
      name: 'Forms',
      summary: '',
      exampleSpecs: {
        prefix: 'forms-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'image',
      name: 'Image',
      summary: '',
      exampleSpecs: {
        prefix: 'image-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'map',
      name: 'Map',
      summary: '',
      exampleSpecs: {
        prefix: 'map-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'models',
      name: 'Models',
      summary: '',
      exampleSpecs: {
        prefix: 'models-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'node-icon',
      name: 'Node icon',
      summary: '',
      exampleSpecs: {
        prefix: 'node-icon-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'page-break',
      name: 'Page break',
      summary: '',
      exampleSpecs: {
        prefix: 'page-break-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'page-slider',
      name: 'Page slider',
      summary: '',
      exampleSpecs: {
        prefix: 'page-slider-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'reports',
      name: 'Reports',
      summary: '',
      exampleSpecs: {
        prefix: 'reports-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'table',
      name: 'Table',
      summary: '',
      exampleSpecs: {
        prefix: 'table-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'text',
      name: 'Text',
      summary: '',
      exampleSpecs: {
        prefix: 'text-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'time',
      name: 'Time',
      summary: '',
      exampleSpecs: {
        prefix: 'time-',
      },
      additionalApiDocs: [],
    },
    {
      id: 'utils',
      name: 'Utils',
      summary: '',
      exampleSpecs: {
        prefix: 'utils-',
      },
      additionalApiDocs: [],
    },
  ],
  // TODO(jelbourn): re-add utilities and a11y as top-level categories once we
  // can generate their API docs with dgeni. Currently our setup doesn't
  // generate API docs for constants and standalone functions (much of the
  // utilities) and we have no way of generating API docs more granularly than
  // directory-level (within a11y) (same for viewport).
};

for (const doc of DOCS[MATERIAL]) {
  doc.packageName = 'material';
  doc.examples = exampleNames.filter(
      key => key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
          !doc.exampleSpecs.exclude?.some(
              excludeName => key.indexOf(excludeName) === 0));
}

for (const doc of DOCS[IONIC]) {
  doc.packageName = 'ionic';
  doc.examples = exampleNames.filter(
      key => key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
          !doc.exampleSpecs.exclude?.some(
              excludeName => key.indexOf(excludeName) === 0));
}

for (const doc of DOCS[CORE]) {
  doc.packageName = 'core';
  doc.examples = exampleNames.filter(
      key => key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
          !doc.exampleSpecs.exclude?.includes(key));
}

const ALL_MATERIAL = DOCS[MATERIAL];
const ALL_IONIC = DOCS[IONIC];
const ALL_CORE = DOCS[CORE];
const ALL_DOCS = ALL_MATERIAL.concat(ALL_IONIC).concat(ALL_CORE);

@Injectable()
export class DocumentationItems {
  getItems(section: string): DocItem[] {
    if (section === MATERIAL) {
      return ALL_MATERIAL;
    }
    if (section === IONIC) {
      return ALL_IONIC;
    }
    if (section === CORE) {
      return ALL_CORE;
    }
    return [];
  }

  getItemById(id: string, section: string): DocItem|undefined {
    return ALL_DOCS.find(doc => doc.id === id && doc.packageName === section);
  }
}
