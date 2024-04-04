import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeacherService, teacherData } from '../../services/teacher.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'school-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css',
})
export class TeacherListComponent implements OnInit, OnDestroy {
  fetchAllTeachersSubscriber!: Subscription;
  teachersData!: teacherData[];

  constructor(private teacherService: TeacherService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllTeachersSubscriber = this.teacherService
      .getAllTeachers()
      .subscribe((responseData) => {
        this.teachersData = responseData.data.json;
      });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'pending':
        return 'danger';
      case 'approved':
        return 'success';
      default:
        return 'warning';
    }
  }

  redirectToSingleTeacher(user_id: string) {
    this.router.navigate(['teachers', user_id]);
  }

  ngOnDestroy(): void {
    this.fetchAllTeachersSubscriber?.unsubscribe();
  }
}
