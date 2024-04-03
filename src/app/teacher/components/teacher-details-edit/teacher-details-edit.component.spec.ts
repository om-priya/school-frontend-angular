import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailsEditComponent } from './teacher-details-edit.component';

describe('TeacherDetailsEditComponent', () => {
  let component: TeacherDetailsEditComponent;
  let fixture: ComponentFixture<TeacherDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherDetailsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
