import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

  nombreUrl: string = '';
  urlShort: string = '';
  urlProcesada: boolean = false;
  loading: boolean = false;

  mostrarError: boolean = false;
  textError: string = '';


  constructor(
    private shortUrlService: ShortUrlService
  ) { }


  procesarUrl() {

    if (this.nombreUrl.length === 0) {
      this.mostrarError = true;
      this.textError = 'Por favor ingrese una URL';
      setTimeout(() => {
        this.mostrarError = false;
      }, 3000);

      return;
    }
    this.loading = true;
    this.urlProcesada = false;
    this.shortUrlService.getShortUrl(this.nombreUrl).subscribe({
      next: (data) => {
        this.urlShort = data.link;
        this.urlProcesada = true;
        this.loading = false;
      },
      error: (err) => {
        this.mostrarError = true;
        this.textError = 'Por favor ingrese una URL válida';
        this.loading = false;
        setTimeout(() => {
          this.mostrarError = false;
        }, 3000);

      }
    })
  }

}
