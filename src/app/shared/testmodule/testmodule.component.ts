import { Component,AfterContentChecked, ViewChild,ViewEncapsulation, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {  Pagination,Navigation } from 'swiper';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-testmodule',
  templateUrl: './testmodule.component.html',
  styleUrls: ['./testmodule.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestmoduleComponent implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;


  config: SwiperOptions = {
    slidesPerView:1,
    spaceBetween: 0,
    pagination:true,
    navigation:true,
    loop: true,

 }

 constructor() { }

 ngOnInit() {
   SwiperCore.use([Pagination,Navigation])
 }

ngAfterContentChecked(): void {

   if (this.swiper) {
     this.swiper.updateSwiper({});
     }

}
}
