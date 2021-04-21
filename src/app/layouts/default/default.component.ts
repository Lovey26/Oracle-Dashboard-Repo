import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavService } from 'src/nav.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer', { static: false }) public appDrawer: ElementRef;

  sideBarOpen = false;

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
