import {Component, NgModule} from '@angular/core';
import {ajfVersion} from '../version/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  isNextVersion = location.hostname.startsWith('next.docs.ajf.rocks');

  version = ajfVersion;
}


@NgModule({
  exports: [Footer],
  declarations: [Footer],
})
export class FooterModule {
}
