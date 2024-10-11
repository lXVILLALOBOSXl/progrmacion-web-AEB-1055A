import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importar Módulos de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';  // Agregar MatListModule
import { MatInputModule } from '@angular/material/input';        // Módulo para matInput
import { MatFormFieldModule } from '@angular/material/form-field';  // Módulo para matFormField

import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,  // Módulo para botones
    MatCardModule,    // Módulo para tarjetas
    MatIconModule,    // Módulo para íconos
    MatListModule ,    // Módulo para listas y mat-list-item
    MatInputModule,        // Módulo para inputs
    MatFormFieldModule  // Módulo para formularios
  ],
  animations: [
    // Definir una animación de desvanecimiento
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),  // Estado inicial cuando el elemento no existe
      transition('void <=> *', [animate(1000)]),  // Transición de entrada/salida
    ])
  ]
})
export class TaskManagerComponent implements OnInit {
  newTask: string = '';
  tasks$: Observable<string[]> = new Observable<string[]>();
  externalTasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
    this.getExternalTasks();
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(task: string): void {
    this.taskService.removeTask(task);
  }

  getExternalTasks(): void {
    this.taskService.getExternalTasks().subscribe((data) => {
      this.externalTasks = data.slice(0, 10);
    });
  }
}