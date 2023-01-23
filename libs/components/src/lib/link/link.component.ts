import {Component, Input, NgModule, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  host: {
    class:
      'inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none',
  },

})
export class LinkComponent {
  @Input()
  color: 'primary' | 'secondary' = 'primary';
  @Input()
  href: string | undefined;
  @Input()
  target?: '_self' | '_blank' | '_parent' | '_top' = '_self';

  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [LinkComponent],
  exports: [LinkComponent],
})
export class LinkComponentModule {}
