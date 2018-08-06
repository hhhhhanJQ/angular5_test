import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public detailValue = '';
  public id = '';
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
  }
  gotoSamePage() {
    this.router.navigateByUrl('taskDetail/' + this.detailValue);
  }

}
