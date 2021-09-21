import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status='All';
  text='';
  editItem?:any;
  title = 'angular-bs1';
  todos=[
    {id:uuidv4(),title:"One",completed:true},
  {id:uuidv4(),title:"Two",completed:true},
  {id:uuidv4(),title:"Three",completed:false}
  ];

  toggle(item:any){
    item.completed=!item.completed;
  }
  get count(){
    return this.todos.length;
  }

  get activeCount(){
    return this.todos.filter(x=>!x.completed).length;
  }
  get completedCount(){
    return this.todos.filter(x=>x.completed).length;
  }

  setStatus(status:'All'|'Active'|'Completed'){
    this.status=status;
  }

  get filerTodos(){
    switch(this.status){
      case 'Active':
        return this.todos.filter(x=>!x.completed);
        case 'Completed':
          return this.todos.filter(x=>x.completed);
          default:
            return this.todos;
    }
  }

  addTodo(){
    if (!this.text) return;
    this.todos.push({id:uuidv4(),title:this.text,completed:false})
    this.text='';
  }

  editTodo(item:any){
    this.editItem={...item};
  }

  saveTodo(){
    let tempItem:any=this.todos.find(x=>x.id===this.editItem.id);
    tempItem.title=this.editItem.title;
    tempItem.completed=this.editItem.completed;
    this.editItem=null;
  }

  deleteTodo(item:any){
    this.todos=this.todos.filter(x=>x.id!==item.id);
  }

  cancelTodo(){
    this.editItem=null;
  }
}
