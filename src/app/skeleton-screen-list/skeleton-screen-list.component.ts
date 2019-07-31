import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skeleton-screen-list',
  templateUrl: './skeleton-screen-list.component.html',
  styleUrls: ['./skeleton-screen-list.component.scss', '../skeleton-screen/skeleton-screen.component.scss']
})
export class SkeletonScreenListComponent implements OnInit {

  // Input
  @HostBinding('style.flex')
  @Input() flexSpan: number = 1;
  @Input() numberOfListItems: number = 8;
  @Input() numberOfToolbarItems: number = 3;

  // global variables
  repeatSkeletonBars = [];
  repeatToolbarItems = [];

  constructor() {
    this.repeatSkeletonBars = [...Array(this.numberOfListItems).keys()];
    this.repeatToolbarItems = [...Array(this.numberOfToolbarItems).keys()];
  }

  ngOnInit() {
  }
}
