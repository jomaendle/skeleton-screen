import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-skeleton-screen',
  templateUrl: './skeleton-screen.component.html',
  styleUrls: ['./skeleton-screen.component.scss']
})
export class SkeletonScreenComponent implements OnInit {
  // Configuration Input
  // Input parameters
  @Input() amountOfRepeats: number;
  @Input() amountOfColumns: number;
  @Input() amountOfToolbarItems: number;

  // DOM elements
  // @ts-ignore
  @ViewChild('mainContent') mainCont;
  // @ts-ignore
  @ViewChild('skeletons') skeletons;


  // Global variables
  repeatSkeletonBars = [];
  repeatToolbarItem = [];

  constructor() { }

  ngOnInit() {
    this.repeatSkeletonBars = [...Array(this.amountOfRepeats).keys()];
    this.repeatToolbarItem = [...Array(this.amountOfToolbarItems).keys()];
  }
}
