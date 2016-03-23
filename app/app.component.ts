import { Component, EventEmitter } from 'angular2/core';
// add EventEmitter bc it acts like a bridge btwn components to allow them to communicate with each other. They're objects which allow components to interact with each other and the user.
import { TaskListComponent } from './task-list.component';
// allows for communication btwn this file and the child component (which now resides in task-list.component)
import { Task } from './task.model';
// allows for communication into the definition of Task

// /////////////// GRANDCHILD of parent; child of child /////////////////
// @Component({
//   selector: 'task-display',
//   inputs: ['task'],
//   template: `
//     <h3>{{ task.description }}</h3>
//   `
// })
// export class TaskComponent {
//   public task: Task;
// }

// ////////////// CHILD COMPONENT //////////////////////
// @Component({
//   selector: 'task-list',
//   input: ['taskList'],
//   outputs: ['onTaskSelect'],
//   directives: [TaskComponent],
//   template: `
//   <task-display *ngFor="#currentTask of taskList"
//     (click)="taskClicked(currentTask)"
//     [class.selected]="currentTask === selectedTask"
//     [task]="currentTask">
//   </task-display>
//   `
//   // add .selected class to task coming from parent that is simultaneously the selected and current task
// })
// export class TaskListComponent {
//   public taskList: Task[];
//   public onTaskSelect: EventEmitter<Task>;
//   public selectedTask: Task;
//   constructor() {
//     // instantiate the Event Emitter object in the child component constructor. holds the EventEmitter object for output
//     this.onTaskSelect = new EventEmitter();
//   }
//   taskClicked(clickedTask: Task): void {
//     console.log("child", clickedTask);
//     // wraps all this info up to be sent into the html selector now that it has been selected
//     this.selectedTask = clickedTask;
//     this.onTaskSelect.emit(clickedTask);
//   }
// }

// parent component (root component)
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  // this loops through and prints tasks to page inside html selector ^
  template: `
  <div class='container'>
    <h1>To Do List</h1>
      <task-list
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
  `
})
export class AppComponent {
  public tasks: Task[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
// read from task.model
// export class Task {
//   public done: boolean = false;
//   constructor(public description: string, public id: number) {
//
//   }
// }
