import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { TranslateService } from '../../landing/translate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class LoginComponent implements OnInit {
  loginTitle$!: Observable<string>;  // Observable para el título del formulario
  emailLabel$!: Observable<string>;  // Observable para el label del correo
  passwordLabel$!: Observable<string>;  // Observable para el label de la contraseña
  submitButton$!: Observable<string>;  // Observable para el botón de enviar

  constructor(public translate: TranslateService) {
    console.log('LoginComponent inicializado con TranslateService');
  }

  async ngOnInit(): Promise<void> {
    console.log('ngOnInit de LoginComponent ejecutado');
    await this.translate.changeLanguage(this.translate.getCurrentLang());  // Usar el método público para obtener el idioma actual
    this.loadTranslations();  // Cargar las traducciones en los observables después de que se carguen correctamente
  }

  // Cargar las traducciones para las claves necesarias
  loadTranslations(): void {
    console.log('LoginComponent: Cargando traducciones...');
    
    // Actualizar los observables con los datos cargados
    this.loginTitle$ = this.translate.getTranslation('login.title');
    this.emailLabel$ = this.translate.getTranslation('login.email');
    this.passwordLabel$ = this.translate.getTranslation('login.password');
    this.submitButton$ = this.translate.getTranslation('login.submit');
  
    // Suscribir a los observables para ver los valores actualizados en la consola
    this.loginTitle$.subscribe(value => console.log('login.title:', value));
    this.emailLabel$.subscribe(value => console.log('login.email:', value));
    this.passwordLabel$.subscribe(value => console.log('login.password:', value));
    this.submitButton$.subscribe(value => console.log('login.submit:', value));
  }

  async changeLanguage(lang: string): Promise<void> {
    await this.translate.changeLanguage(lang);  // Esperar a que se carguen las traducciones
    this.loadTranslations();  // Recargar las traducciones en los observables después de que se carguen correctamente
  }
}