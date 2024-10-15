import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../itask';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task; // To receive the task data
  @Input() onToggle!: (task: Task) => void; // To receive the toggle function

  toggleCompletion() {
    this.onToggle(this.task); // Call the toggle function when clicked
  }
}

