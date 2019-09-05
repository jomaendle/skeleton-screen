import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skeleton-screen-details',
  templateUrl: './skeleton-screen-details.component.html',
  styleUrls: ['./skeleton-screen-details.component.scss', '../skeleton-screen/skeleton-screen.component.scss']
})
export class SkeletonScreenDetailsComponent implements OnInit {

  // Input
  @HostBinding('style.min-width') minWidth = '340px';
  @HostBinding('style.flex')
  @Input() flexSpan: number = 1;
  @Input() numberOfListItems: number = 2;
  @Input() numberOfShortListItems: number = 1;

  // global variables
  repeatSkeletonBars = [];
  repeatShortSkeletonBars = [];

  constructor() {  }

  ngOnInit() {
    this.repeatSkeletonBars = [...Array(this.numberOfListItems).keys()];
    this.repeatShortSkeletonBars = [...Array(this.numberOfShortListItems).keys()];
  }

}
