import {Component,  OnInit,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  text: string = '';
  date = new Date();
  id:number=3;
  config:{[key:string]:string}|null=null;
  todoLists = [
    {
      id: 0,
      name: 'Buy car ',
      date: new Date(2022, 12, 22),
      done: false
    }, {
      id: 1,
      name: 'Buy car ',
      date: new Date(2022, 12, 22),
      done: false
    }, {
      id: 2,
      name: 'Buy car ',
      date: new Date(2022, 12, 22),
      done: false
    },
  ]
constructor() {
setTimeout(()=>{
  this.config={
    title:'Todo list',
    footer:'© Todo list  built in Angular.',
    date: new Date().toDateString(),
  }
},2000)
  }
  ngOnInit() {

  }

  addTask() {
    this.todoLists.push({
      id: this.id++,
      name: this.text,
      date: this.date,
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
    console.log(this.todoLists)
  }
  onDelete(id:number){
    this.todoLists.splice(id,1)
  }
  onDeleteAll(){
    this.todoLists=[];
  }
}
