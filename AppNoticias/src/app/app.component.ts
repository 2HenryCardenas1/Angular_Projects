import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppNoticias';

  listNoticias: any[] = [];
  loading: boolean = false;

  constructor(
    private noticiaService: NoticiaService
  ) { }

  searchNews(event: Event) {
    this.loading = true;
    this.listNoticias = [];
    this.noticiaService.getNews(event).subscribe({
      next: (data) => {
        this.listNoticias = data.articles;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      }
    })
  }

}
