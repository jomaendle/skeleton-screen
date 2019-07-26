import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-skeleton-screen',
  templateUrl: './skeleton-screen.component.html',
  styleUrls: ['./skeleton-screen.component.scss']
})
export class SkeletonScreenComponent implements OnInit {

  // Configuration Input
  @Input() numberOfListEntries: number;
  @Input() numberOfListColumns: number;
  @Input() numberOfToolbarItems: number;
  @Input() showListIcon: boolean;
  @Input() textLength: 'even' | 'uneven' = 'even';
  @Input() showHeader: boolean;
  @Input() showToolbar: boolean;
  @Input() showExtraHeaderSpace: boolean;
  @Input() skeletonStyle: 'shine' | 'pulse' = 'pulse';
  @Input() toolbarOrientation: 'left' | 'center' | 'right' = 'left';

  // Output values
  @Output() showPulseAnimation: true;

  // Global variables
  arrayForListEntries: number[];
  arrayForToolbarItems: number[];

  constructor() { }

  ngOnInit() {
    this.arrayForListEntries = [...Array(this.numberOfListEntries).keys()];
    this.arrayForToolbarItems = [...Array(this.numberOfToolbarItems).keys()];
  }
}
