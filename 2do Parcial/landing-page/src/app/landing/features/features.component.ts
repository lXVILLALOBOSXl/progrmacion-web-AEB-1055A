import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features: string[] = ['Característica 1', 'Característica 2', 'Característica 3'];

  onSelectFeature(feature: string) {
    console.log('Feature seleccionada:', feature);
  }
}
