import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AjfDocsExample} from './app/material-docs-example';
import {DemoMaterialModule} from './app/material-module';

// Default MatFormField appearance to 'fill' as that is the new recommended
// approach and the `legacy` and `standard` appearances are scheduled for
// deprecation in version 10. This makes the examples that use MatFormField
// render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AjfDocsExample],
  declarations: [AjfDocsExample],
  bootstrap: [AjfDocsExample],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
  ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(
    err => console.error(err));
