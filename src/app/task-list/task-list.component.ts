import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import {  OnInit } from '@angular/core';
import { Task } from '../itask'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Fetch tasks from TaskService
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed; // Toggle the completion status
    console.log(`Task ${task.title} is now ${task.completed ? 'completed' : 'pending'}`); // Log the status change
  }
}
 

