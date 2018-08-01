import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskId = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoAddPage() {
    this.router.navigateByUrl('addTask/' + this.taskId);
  }

}
