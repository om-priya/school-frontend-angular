import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TeacherService } from '../../services/teacher.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-teacher-details-edit',
  templateUrl: './teacher-details-edit.component.html',
  styleUrl: './teacher-details-edit.component.css',
})
export class TeacherDetailsEditComponent implements OnDestroy {
  @Input() name!: string;
  @Input() gender!: string;
  @Input() email!: string;
  @Input() phone!: string;
  @Input() user_id: string;

  @Output() successUpdated = new EventEmitter<void>();

  updateTeacherSubscriber: Subscription;

  constructor(
    private teacherService: TeacherService,
    private messageService: MessageService
  ) {}

  updateTeacher(formData: NgForm) {
    this.updateTeacherSubscriber = this.teacherService
      .updateTeacher(formData.value, this.user_id)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
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
