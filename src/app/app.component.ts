import {Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  text: string = '';
  data = new Date();
  id:number=0;
  @ViewChild('done', {static: false}) done!: QueryList<ElementRef>
  todoLists = [
    {
      id: 0,
      name: 'Buy car ',
      data: new Date(2022, 12, 22),
      done: false
    }, {
      id: 1,
      name: 'Buy car ',
      data: new Date(2022, 12, 22),
      done: false
    }, {
      id: 2,
      name: 'Buy car ',
      data: new Date(2022, 12, 22),
      done: false
    },
  ]

  ngOnInit() {

  }

  addTask() {
    this.todoLists.push({
      id: this.id++,
      name: this.text,
      data: this.data,
      done: false
    })
    console.log(this.todoLists)
  }

  onDone(id: number) {
    this.todoLists = this.todoLists.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    })
  }
  onDelete(id:number){
    this.todoLists.splice(id,1)
  }

}
