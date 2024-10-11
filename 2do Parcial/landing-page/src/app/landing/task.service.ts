import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  // Importar HttpClient



@Injectable({
  providedIn: 'root'  // Hacer que el servicio esté disponible en toda la aplicación
})
export class TaskService {
  private tasksSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['Tarea 1', 'Tarea 2', 'Tarea 3']);

  constructor(private http: HttpClient) {}  // Inyectar HttpClient en el constructor

  // Método para obtener tareas locales como Observable
  getTasks(): Observable<string[]> {
    return this.tasksSubject.asObservable();
  }

  // Método para agregar una tarea
  addTask(task: string): void {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, task]);
  }

  // Método para eliminar una tarea
  removeTask(task: string): void {
    const currentTasks = this.tasksSubject.value.filter(t => t !== task);
    this.tasksSubject.next(currentTasks);
  }

  // Método para obtener tareas de una API externa
  getExternalTasks(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }
}


