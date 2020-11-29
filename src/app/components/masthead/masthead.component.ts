import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent implements OnInit {
  
  dropdownItems: MenuItem[] = [
    {
      label: 'Logout',
      icon: 'fa fa-sign-out-alt',
      command: () => console.log('Logout'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
