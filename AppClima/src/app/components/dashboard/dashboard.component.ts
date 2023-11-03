import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  urlImage = 'https://cdn-icons-png.flaticon.com/512/2105/2105242.png';
  city: string = '';
  temp: number = 0;
  humidity: number = 0;
  wind: string = '';
  query: boolean = false;
  loading: boolean = false;
  error: boolean = false;
  errorMessage: string = '';


  constructor(private climaService: ClimaService) { }

  getWeather() {
    this.query = false;
    this.loading = true;

    this.climaService.getWeather(this.city).subscribe(
      {
        next: (data) => {
          this.temp = data.main.temp - 273.15;
          this.humidity = data.main.humidity;
          this.wind = data.wind.speed;
          this.query = true;
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
          this.error = true;
          this.errorMessage = error.error.message;
          setTimeout(() => {
            this.error = false;
            this.city = '';
          }, 2000);

        }
      }
    )
  }
}
