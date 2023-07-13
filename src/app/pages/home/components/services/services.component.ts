import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  public card: any[] = [
    {urlImg: "corte-cabelo", title: "Corte de cabelo", price: 55.90, id: 0},
    {urlImg: "corte-completo", title: "Corte completo", price: 75.90, id: 1},
    {urlImg: "corte-e-barba", title: "Corte & Barba", price: 85.90, id: 2},
  ]

}
