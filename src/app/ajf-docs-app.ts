import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {map, pairwise, startWith} from 'rxjs/operators';

import {GaService} from './shared/ga/ga';
import {NavigationFocusService} from './shared/navigation-focus/navigation-focus.service';

@Component({
  selector: 'ajf-docs-app',
  templateUrl: './ajf-docs-app.html',
  styleUrls: ['./ajf-docs-app.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AjfDocsApp implements OnDestroy {
  private subscriptions = new Subscription();

  constructor(ga: GaService, navigationFocusService: NavigationFocusService) {
    this.subscriptions.add(
        navigationFocusService.navigationEndEvents
            .pipe(map(e => e.urlAfterRedirects), startWith(''), pairwise())
            .subscribe(([fromUrl, toUrl]) => {
              // We want to reset the scroll position on navigation except when
              // navigating within the documentation for a single component.
              if (!navigationFocusService.isNavigationWithinComponentView(
                      fromUrl, toUrl)) {
                resetScrollPosition();
              }
              ga.locationChanged(toUrl);
            }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
