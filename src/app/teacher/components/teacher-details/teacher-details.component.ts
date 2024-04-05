import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeacherService, teacherData } from '../../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css',
})
export class TeacherDetailsComponent implements OnInit, OnDestroy {
  fetchSingleRouteSubscriber: Subscription;
  deleteTeacherSubscriber: Subscription;
  approveTeacherSubscriber: Subscription;
  teacherData: teacherData;
  visible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.fetchTeacher();
  }

  navigateToCreateFeedback(user_id: string) {
    this.router.navigate(['feedbacks', user_id, 'create']);
  }

  showDialog() {
    this.visible = true;
  }
  closeDialog() {
    this.visible = false;
    this.fetchTeacher();
  }
  fetchTeacher() {
    const teacher_id = this.route.snapshot.params['id'];
    this.fetchSingleRouteSubscriber = this.teacherService
      .getSingleTeacher(teacher_id)
      .subscribe({
        next: (responseData) => {
          this.teacherData = responseData.data.json[0];
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

  deleteTeacher(teacher_id: string) {
    this.deleteTeacherSubscriber = this.teacherService
      .deleteTeacher(teacher_id)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          this.router.navigate(['teachers']);
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

  approveTeacher(teacher_id: string) {
    this.approveTeacherSubscriber = this.teacherService
      .approveTeacher(teacher_id)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          this.router.navigate(['teachers']);
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

  ngOnDestroy(): void {
    this.fetchSingleRouteSubscriber?.unsubscribe();
    this.deleteTeacherSubscriber?.unsubscribe();
    this.approveTeacherSubscriber?.unsubscribe();
  }
}
