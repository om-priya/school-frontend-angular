import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'school-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrl: './sub-navbar.component.css',
})
export class SubNavbarComponent implements OnInit {
  @Input({ required: true }) role: string;
  items: MenuItem[];

  // subnavbar if role is superadmin
  superAdminItems: MenuItem[] = [
    { label: 'Principals', routerLink: ['/principals'] },
    { label: 'Leaves', routerLink: ['/leaves'] },
  ];

  // subnavbar if role is principal
  principalItems: MenuItem[] = [
    { label: 'Teachers', routerLink: ['/teachers'] },
    { label: 'Events', routerLink: ['/events'] },
    { label: 'Leaves', routerLink: ['/leaves'] },
    { label: 'Issues', routerLink: ['/issues'] },
  ];

  // subnavbar if role is teacher
  teacherItems: MenuItem[] = [
    { label: 'Feedbacks', routerLink: ['/feedbacks'] },
    { label: 'Leaves', routerLink: ['/leaves'] },
    { label: 'Raise Issues', routerLink: ['/issues/create'] },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getItemsForSubNavbar();
  }

  // navbar items based on roles
  getItemsForSubNavbar(): void {
    console.log(this.role);
    if (this.role === 'superadmin') {
      this.items = this.superAdminItems;
    } else if (this.role === 'principal') {
      this.items = this.principalItems;
    } else {
      this.items = this.teacherItems;
    }
  }
}
