import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skeleton-screen-details',
  templateUrl: './skeleton-screen-details.component.html',
  styleUrls: ['./skeleton-screen-details.component.scss', '../skeleton-screen/skeleton-screen.component.scss']
})
export class SkeletonScreenDetailsComponent implements OnInit {

  // Input
  @HostBinding('style.flex')
  @Input() flexSpan: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
