import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public addTaskForm: FormGroup;
  public taskData = {
    taskName: '',
    frequency: '',
  };
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('add task page');
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });
    this.addTaskForm = this.fb.group({
      taskName: ['', [Validators.required]],
      frequency: ['', [Validators.required]]
    });
  }
  backToListPage() {
    this.taskData.taskName = this.addTaskForm.controls['taskName'].value || '';
    this.taskData.frequency = this.addTaskForm.controls['frequency'].value || '';
    this.router.navigateByUrl('taskList');
  }
  submitForm() {
  }


}
