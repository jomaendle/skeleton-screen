import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skeleton-screen-tree',
  templateUrl: './skeleton-screen-tree.component.html',
  styleUrls: ['./skeleton-screen-tree.component.scss', '../skeleton-screen/skeleton-screen.component.scss', '../skeleton-screen-list/skeleton-screen-list.component.scss']
})
export class SkeletonScreenTreeComponent implements OnInit {

  // Input
  @HostBinding('style.min-width') minWidth = '340px';
  @HostBinding('style.flex')
  @Input() flexSpan: number = 1;
  @Input() numberOfToolbarItems: number = 2;

  // global variables
  numberOfFirstLevelItems = 1;
  numberOfSecondLevelItems = 2;
  numberOfThirdLevelItems = 1;

  repeatToolbarItems = [];
  repeatFirstLevelItems = [];
  repeatSecondLevelItems = [];
  repeatThirdLevelItems = [];

  constructor() {  }

  ngOnInit() {
    this.repeatToolbarItems = [...Array(this.numberOfToolbarItems).keys()];
    this.repeatFirstLevelItems = [...Array(this.numberOfFirstLevelItems).keys()];
    this.repeatSecondLevelItems = [...Array(this.numberOfSecondLevelItems).keys()];
    this.repeatThirdLevelItems = [...Array(this.numberOfThirdLevelItems).keys()];
  }

}
