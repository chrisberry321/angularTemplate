import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "done",
  pure: false
})
// DonePipe must be able to communicate and get info from PipeTransform interface (from angular)
export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredDoneState = args[0];
    // boolean if/else loop that filters tasks
    if(desiredDoneState === "done") {
      return input.filter((task) => {
        return task.done;
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((task) => {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}
