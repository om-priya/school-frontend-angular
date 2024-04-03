import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'school-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrl: './sub-navbar.component.css',
})
export class SubNavbarComponent implements OnInit {
  role: string | undefined;
  items: MenuItem[] | undefined;

  superAdminItems: MenuItem[] = [
    { label: 'hello Super Admin' },
    { label: 'hello Super Admin' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.role = 'superadmin';
    this.getItemsForSubNavbar();
  }

  getItemsForSubNavbar(): void {
    if (this.role === 'superadmin') {
      this.items = this.superAdminItems;
    } else if (this.role === 'principal') {
      // load principal items
    } else {
      // load teacher items
    }
  }
}
