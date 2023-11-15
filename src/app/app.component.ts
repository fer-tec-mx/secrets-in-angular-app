import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from "./../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log('environment.production: ', environment.production);
    console.log('environment.apiUrl: ', environment.apiUrl);
    console.log('environment.apiKey: ', environment.apiKey);
  }

  title = 'secrets-in-angular-app';
}
