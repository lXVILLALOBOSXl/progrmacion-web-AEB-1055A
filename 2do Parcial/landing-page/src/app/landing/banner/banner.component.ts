import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Agregar FormsModule y CommonModule
})
export class BannerComponent {
  title: string = 'Bienvenido a la Landing Page';
  subtitle: string = 'La mejor página para aprender Angular';
  titleColor: string = 'blue';  // Propiedad dinámica para cambiar el color
  showSubtitle: boolean = true;
  changeTitleColor() {
  this.titleColor = this.titleColor === 'blue' ? 'green' : 'blue';
}
}
