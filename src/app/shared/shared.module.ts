import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { IonicModule } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import SwiperCore, {  Pagination,Navigation } from 'swiper';







@NgModule({
  declarations: [TestmoduleComponent, ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,



  ],
  exports: [TestmoduleComponent],

})
export class SharedModule { }
