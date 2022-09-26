import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [TestmoduleComponent],
  imports: [
    CommonModule,
    IonicModule,


  ],
  exports: [TestmoduleComponent],

})
export class SharedModule { }
