import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private currentLang: string = 'en';  // Idioma actual, por defecto 'en'
  private translations: { [key: string]: { [key: string]: string } } = {
    en: {
      'login.title': 'Login',
      'login.email': 'Email',
      'login.password': 'Password',
      'login.submit': 'Submit'
    },
    es: {
      'login.title': 'Iniciar sesión',
      'login.email': 'Correo electrónico',
      'login.password': 'Contraseña',
      'login.submit': 'Enviar'
    }
  };

  private languageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentLang);

  changeLanguage(lang: string): Promise<void> {
    return new Promise((resolve) => {
      this.currentLang = lang;
      this.languageSubject.next(lang);
      resolve();
    });
  }

  getTranslation(key: string): Observable<string> {
    return this.languageSubject.asObservable().pipe(
      map(lang => this.translations[lang][key])
    );
  }

  // Método público para obtener el idioma actual
  getCurrentLang(): string {
    return this.currentLang;
  }
}