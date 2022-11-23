import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos!: Todo[];
  message: string | undefined;
  // [
  //    new Todo(1,'Learn to Dance',false,new Date()),
  //    new Todo(2,'Become an Expert at Angular',false,new Date()),
  //    new Todo(3,'Visit India',false,new Date()),
  //   // {id:1,description:'Learn to dance'},
  //   // {id:2,description:'Become an Expert at Angular'},
  //   // {id:3,description:'Visit India'}
  // ]


  constructor(private todoService:TodoDataService,private route:Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('name').subscribe((response=>{
      this.todos=response;
    }))
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo('username',id).subscribe((response=>{
      console.log(response);
      this.message=`Delete of Todo ${id} Successful`;
      this.refreshTodos();
    }))
  }

  updateTodo(id:number){
    this.route.navigate(['todos',id]);
  }

  addTodo(){
    this.route.navigate(['todos',-1]);
  }

}
