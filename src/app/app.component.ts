import {Component} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  text: string = '';
  date = '';
  id: number = 3;
  toggle: boolean = false;
  config: { [key: string]: string } | null = null;
  todoLists: Task[] = [
    {
      id: 0,
      name: 'Buy car ',
      date: '2022-02-22',
      done: false
    }, {
      id: 1,
      name: 'Buy car ',
      date: '2022-02-22',
      done: false
    }, {
      id: 2,
      name: 'Buy car ',
      date: '2022-02-22',
      done: false
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Todo list',
        footer: '© Todo list  built in Angular.',
        date: new Date().toDateString(),
      }
    }, 2000);
    this.sortTask();
  }

  addTask() {
    this.todoLists.push({
      id: this.id++,
      name: this.text,
      date: this.date,
      done: false
    });
    this.text = '';
    this.date = '';
    this.sortTask();
  }

  onDone(task: Task) {
    task.done = true;
    this.sortTask();
  }

  onDelete(id: number) {
    this.todoLists.splice(id, 1);
    this.sortTask();
  }

  onDeleteAll() {
    this.todoLists = [];
    this.sortTask();
  }

  toggleBtn() {
    this.toggle = !this.toggle;
    this.sortTask();
  }

  private sortTask() {
    this.todoLists = this.todoLists.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}
