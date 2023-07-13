import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './components/services/services.component';
import { CardServicosModule } from '../components/card-servicos/card-servicos.module';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardServicosModule,
  ]
})
export class HomeModule { }
