import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  categorias = [
    {
      nombre: 'General',
      value: 'general'
    },
    {
      nombre: 'Negocios',
      value: 'bussines'
    },
    {
      nombre: 'Entretenimiento',
      value: 'entertainment'
    },
    {
      nombre: 'Salud',
      value: 'health'
    },
    {
      nombre: 'Ciencia',
      value: 'science'
    },
    {
      nombre: 'Deportes',
      value: 'sports'
    },
    {
      nombre: 'Tecnología',
      value: 'technology'
    }
  ];

  paises = [
    {
      nombre: 'Colombia',
      value: 'co'
    },
    {
      nombre: 'Argentina',
      value: 'ar'
    },
    {
      nombre: 'México',
      value: 'mx'
    },
    {
      nombre: 'Estados Unidos',
      value: 'us'
    },
    {
      nombre: 'Japan',
      value: 'jp'
    }
  ];
  categoriaSeleccionada = 'general';
  paisSeleccionado = 'co';

  //Send data to parent component
  @Output() paramsSelected = new EventEmitter<any>();

  constructor() { }


  searchNews() {
    const params = {
      category: this.categoriaSeleccionada,
      country: this.paisSeleccionado
    }
    this.paramsSelected.emit(params);
  }


}
