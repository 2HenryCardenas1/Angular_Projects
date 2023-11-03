import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnDestroy {

  text: string = '';
  show: boolean = false;
  subscription: Subscription;

  constructor(
    private imagenService: ImagenService
  ) {

    // suscribirse al observable
    this.subscription = this.imagenService.getError().subscribe(
      {
        next: (msj: string) => {
          this.mostrarMensaje();
          this.text = msj;

        }
      }
    )
  }


  mostrarMensaje() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    // desuscribirse del observable
    this.subscription.unsubscribe();
  }


}
