import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PrincipalService } from '../../services/principal.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-principal-details-edit',
  templateUrl: './principal-details-edit.component.html',
  styleUrl: './principal-details-edit.component.css',
})
export class PrincipalDetailsEditComponent implements OnDestroy {
  @Input() name!: string;
  @Input() gender!: string;
  @Input() email!: string;
  @Input() phone!: string;
  @Input() user_id: string;

  @Output() successUpdated = new EventEmitter<void>();

  updatePrincipalSubscriber: Subscription;

  constructor(
    private principalService: PrincipalService,
    private messageService: MessageService
  ) {}

  updatePrincipal(formData: NgForm) {
    this.updatePrincipalSubscriber = this.principalService
      .updatePrincipal(formData.value, this.user_id)
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
    this.updatePrincipalSubscriber?.unsubscribe();
  }
}
