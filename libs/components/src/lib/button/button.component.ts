import {Component, Input, NgModule, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';

@Component({
  selector: 'button[met-button], a[met-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    class:
      'inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none',
  },

})
export class ButtonComponent {

  // @Output() clickEvent = new EventEmitter();

  // greet(e: any){
  //   console.log('e',e);
  //   this.clickEvent.emit(e)
  // }

}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}
