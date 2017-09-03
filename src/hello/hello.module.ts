import { NgModule } from '@angular/core';

import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  exports: [HelloComponent],
})
export class HelloModule {}
