import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeacherService, teacherData } from '../../services/teacher.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css',
})
export class TeacherListComponent implements OnInit, OnDestroy {
  fetchAllTeachersSubscriber!: Subscription;
  teachersData!: teacherData[];

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchAllTeachersSubscriber = this.teacherService
      .getAllTeachers()
      .subscribe({
        next: (responseData) => {
          this.teachersData = responseData.data.json;
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          });
        },
      });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'pending':
        return 'error';
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
