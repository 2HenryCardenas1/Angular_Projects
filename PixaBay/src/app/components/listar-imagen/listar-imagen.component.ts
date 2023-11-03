import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {

  termino: string = '';
  subscription: Subscription;
  listaImagenes: any[] = [];
  cargando: boolean = false;

  imagenesPorPagina: number = 30;
  paginaActual: number = 1;
  calcularTotalPaginas: number = 0;

  constructor(
    private imagenService: ImagenService
  ) {
    this.subscription = this.imagenService.getTerminoBusqueda().subscribe(
      {
        next: (termino: string) => {
          this.termino = termino;
          this.cargando = true;
          // reiniciamos la pagina actual
          this.paginaActual = 1;
          this.obtenerImagenes();
        }
      }
    )
  }

  ngOnInit(): void {

  }


  obtenerImagenes() {
    this.imagenService.getImages(this.termino, this.imagenesPorPagina, this.paginaActual).subscribe({
      next: (data: any) => {
        this.cargando = false;

        if (data.hits.length === 0) {
          this.imagenService.setError('No se encontraron resultados');
          return;
        }

        this.calcularTotalPaginas = Math.ceil(data.totalHits / this.imagenesPorPagina);



        this.listaImagenes = data.hits;

      },
      error: () => {
        this.imagenService.setError('Error al obtener las imágenes');
        this.cargando = false;
      }
    })
  }

  //Paginación

  paginaAnterior() {
    this.paginaActual--;
    this.cargando = true;
    this.listaImagenes = [];
    this.obtenerImagenes();
  }

  paginaPosterior() {
    this.paginaActual++;
    this.cargando = true;
    this.listaImagenes = [];
    this.obtenerImagenes();
  }


  paginaAnteriorClass() {
    return this.paginaActual === 1 ? false : true;
  }
  paginaPosteriorClass() {
    return this.paginaActual === this.calcularTotalPaginas ? false : true;
  }

}
