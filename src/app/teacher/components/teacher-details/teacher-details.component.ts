import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeacherService, teacherData } from '../../services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css',
})
export class TeacherDetailsComponent implements OnInit, OnDestroy {
  fetchSingleRouteSubscriber!: Subscription;
  teacherData!: teacherData;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.fetchSingleRouteSubscriber?.unsubscribe();
  }
}
