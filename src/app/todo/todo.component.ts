import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: Todo;

  constructor(private service:TodoDataService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id']
    this.todo=new Todo(this.id,'',false,new Date())

    if(this.id!=-1){
      this.service.retriveTodo('username',this.id).subscribe(data=>this.todo=data)
    }
  }


  saveTodo(){
    if(this.id===-1){
      this.service.createTodo('username',this.todo).subscribe(response=>{
        this.todo=response
        this.route.navigate(['todos'])
      })
    }else{
        this.service.updateTodo('username',this.id,this.todo).subscribe((response=>{
          this.todo=response;
          this.route.navigate(['todos'])
        }))
      }
  }

}
