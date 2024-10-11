import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';  // Importar MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Importar MatInputModule
import { MatButtonModule } from '@angular/material/button';  // Importar MatButtonModule

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,  // Formulario Reactivo
    MatFormFieldModule,   // Modulo de campo de formulario
    MatInputModule,       // Modulo para inputs
    MatButtonModule,       // Modulo para botones estilizados
    CommonModule
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Definir el formulario con validaciones
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Validador personalizado para confirmar que las contraseñas coincidan
  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulario enviado:', this.registerForm.value);
      this.registerForm.reset();
    }
  }
}