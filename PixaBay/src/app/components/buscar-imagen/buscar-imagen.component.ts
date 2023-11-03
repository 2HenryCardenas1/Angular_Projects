import { Component } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent {

  nombreImagen: string = '';
  constructor(
    private imagenService: ImagenService
  ) { }

  buscarImagenes() {
    if (this.nombreImagen.length === 0) {
      this.imagenService.setError('Debe ingresar un valor');
      return;
    }
    this.imagenService.sendTerminoBusqueda(this.nombreImagen);
  }
}
