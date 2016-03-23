import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <button (click)="addTask(newDescription)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Task>;
    constructor(){
      // create and emit new eventEmitter to be sent out into the world
      this.onSubmitNewTask = new EventEmitter();
    }
    // takes in user input, which is seen as an html element
    addTask(userDescription: HTMLInputElement) {
      var newTask = new Task(userDescription.value, 0);
      this.onSubmitNewTask.emit(newTask);
      userDescription.value = "";
    }
}
