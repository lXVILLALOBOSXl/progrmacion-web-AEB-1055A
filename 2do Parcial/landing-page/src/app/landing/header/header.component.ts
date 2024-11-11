import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule para usar routerLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],  // Agregar RouterModule
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}