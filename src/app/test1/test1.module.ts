import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test1PageRoutingModule } from './test1-routing.module';

import { Test1Page } from './test1.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test1PageRoutingModule,
    SharedModule,
  ],
  declarations: [Test1Page]
})
export class Test1PageModule {}
