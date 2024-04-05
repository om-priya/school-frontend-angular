import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/services/auth.service';
import { SessionStorageService } from '../../../services/session-storage-service.service';
import { JWTService } from '../../../services/jwtservice.service';

@Component({
  selector: 'school-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrl: './sub-navbar.component.css',
})
export class SubNavbarComponent implements OnInit {
  @Input({ required: true }) role: string;
  items: MenuItem[];

  superAdminItems: MenuItem[] = [
    { label: 'Principals', routerLink: ['/principals'] },
    { label: 'Leaves', routerLink: ['/leaves'] },
  ];

  principalItems: MenuItem[] = [
    { label: 'Teachers', routerLink: ['/teachers'] },
    { label: 'Events', routerLink: ['/events'] },
    { label: 'Leaves', routerLink: ['/leaves'] },
    { label: 'Issues', routerLink: ['/issues'] },
  ];

  teacherItems: MenuItem[] = [
    { label: 'Feedbacks', routerLink: ['/feedbacks'] },
    { label: 'Leaves', routerLink: ['/leaves'] },
    { label: 'Raise Issues', routerLink: ['/issues/create'] },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getItemsForSubNavbar();
  }

  getItemsForSubNavbar(): void {
    console.log(this.role);
    if (this.role === 'superadmin') {
      this.items = this.superAdminItems;
    } else if (this.role === 'principal') {
      // load principal items
      this.items = this.principalItems;
    } else {
      // load teacher items
      this.items = this.teacherItems;
    }
  }
}
