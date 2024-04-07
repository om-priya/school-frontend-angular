import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'school-teacher-details-edit',
  templateUrl: './teacher-details-edit.component.html',
  styleUrl: './teacher-details-edit.component.css',
})
export class TeacherDetailsEditComponent implements OnDestroy {
  @Input() name: string;
  @Input() gender: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() user_id: string;

  @Output() successUpdated = new EventEmitter<void>();

  updateTeacherSubscriber: Subscription;

  constructor(
    private teacherService: TeacherService,
    private messageService: MessageService
  ) {}

  // updating the info of the teacher and emiting the event so that parent can be updated
  updateTeacher(formData: NgForm) {
    this.updateTeacherSubscriber = this.teacherService
      .updateTeacher(formData.value, this.user_id)
      .subscribe({
        next: (responseData) => {
          // showcase toast on UI
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          // emitting event for parent
          this.successUpdated.emit();
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
    this.updateTeacherSubscriber?.unsubscribe();
  }
}
