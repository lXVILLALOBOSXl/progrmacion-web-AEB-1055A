import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './landing/header/header.component';
import { FooterComponent } from './landing/footer/footer.component';
import { FeaturesComponent } from './landing/features/features.component';
import { BannerComponent } from './landing/banner/banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    FeaturesComponent,
    BannerComponent,
    CommonModule
  ]
})
export class AppComponent {
  showLandingContent = false;

  constructor(private router: Router) {
    // Detectar cambios en la ruta y actualizar el estado de `showLandingContent`
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showLandingContent = (event.url === '/');
      });
  }
}