import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  coreInfraItems: NavItem[] = [
    {
      displayName: 'Compute',
      iconName: '',
      route: '/',
      children: [
        {
          displayName: 'Compute List 1',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Compute List 2',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Compute List 3',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Compute List 4',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Compute List 5',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Compute List 6',
          iconName: '',
          route: '/',
        },
      ]
    },
    {
      displayName: 'Block Storage',
      iconName: '',
      route: '/',
      children: [
        {
          displayName: 'Block Storage 1',
          iconName: '',
          route: '/posts',
        },
        {
          displayName: 'Block Storage 2',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Block Storage 3',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Block Storage 4',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Block Storage 5',
          iconName: '',
          route: '/',
        },
      ]
    },
    {
      displayName: 'Object Storage',
      iconName: '',
      route: '/articles',
      children: [
        {
          displayName: 'Object Storage 1',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Object Storage 2',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Object Storage 3',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Object Storage 4',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Object Storage 5',
          iconName: '',
          route: '/',
        },
      ]
    },
    {
      displayName: 'File Storage ',
      iconName: '',
      route: '/contacts',
      children: [
        {
          displayName: 'File Storage 1',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'File Storage 2',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'File Storage 3',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'File Storage 4',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'File Storage 5',
          iconName: '',
          route: '/',
        },
      ]
    },
    {
      displayName: 'Networking',
      iconName: '',
      route: '/contacts',
      children: [
        {
          displayName: 'Networking 1',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Networking 2',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Networking 3',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Networking 4',
          iconName: '',
          route: '/',
        },
        {
          displayName: 'Networking 5',
          iconName: '',
          route: '/',
        },
      ]
    },
  ];

  ngOnInit() {
  }

}
