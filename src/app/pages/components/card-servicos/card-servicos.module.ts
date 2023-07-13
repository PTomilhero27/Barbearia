import { MoneyMaskPipe } from './../../../pipe/money-mask.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServicosComponent } from './card-servicos.component';



@NgModule({
  declarations: [
    CardServicosComponent,
    MoneyMaskPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardServicosComponent
  ]
})
export class CardServicosModule { }
