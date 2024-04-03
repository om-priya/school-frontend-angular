import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDetailsEditComponent } from './principal-details-edit.component';

describe('PrincipalDetailsEditComponent', () => {
  let component: PrincipalDetailsEditComponent;
  let fixture: ComponentFixture<PrincipalDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalDetailsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
