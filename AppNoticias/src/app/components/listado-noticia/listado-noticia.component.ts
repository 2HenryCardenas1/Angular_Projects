import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-noticia',
  templateUrl: './listado-noticia.component.html',
  styleUrls: ['./listado-noticia.component.css']
})
export class ListadoNoticiaComponent {

  //Catch the news from the parent component
  @Input() listnews: any;


}
