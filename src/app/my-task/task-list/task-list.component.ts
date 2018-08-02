import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskId = '';
  public taskList = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.taskList = [
      {id: 1, name: '跑步3km', result: 'undo', frequency: 'everyday'}
    ]
  }
  gotoDetailPage() {
    this.router.navigateByUrl('taskDetail/' + this.taskId);
  }
  gotoAddPage() {
    console.log('gotoAddPage');
    this.router.navigateByUrl('addTask');
  }

}
