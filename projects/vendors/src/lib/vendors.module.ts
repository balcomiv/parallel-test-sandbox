import { NgModule } from '@angular/core';
import { MaterialModule } from './test-components/material.module';
import { VendorsComponent } from './vendors.component';

@NgModule({
  declarations: [VendorsComponent],
  imports: [MaterialModule],
  exports: [VendorsComponent],
})
export class VendorsModule {}
