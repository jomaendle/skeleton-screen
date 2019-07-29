import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef, Inject, Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import * as transition from './helper/transition.js';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {

  // Input parameters
  amountOfRepeats: number;
  amountOfColumns: number;

  // DOM elements
  // @ts-ignore
  @ViewChild('mainContent') mainCont;
  // @ts-ignore
  @ViewChild('skeletons') skeletons;

  // global variables
  applicationDiv: null;
  repeatArray = null;
  title = 'Demo';
  animationDuration = 800;    // in milliseconds
  tranistionDone = false;


  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    // tslint:disable-next-line:variable-name
    @Inject(DOCUMENT) private _document: Document) {
  }

  ngOnInit(): void {
    this.repeatArray = Array.from(Array(this.amountOfRepeats).keys());
  }

  ngAfterContentChecked(): void {
    this.appendScript();
  }

  ngAfterViewInit(): void {
    this.loadHTMLForApplication();
    this.loadScriptsForApplication();
  }


  appendScript() {
    let jsScript = this.renderer.createElement('script');
    jsScript.type = 'application/javascript';
    jsScript.text = 'window.addEventListener(\'appLoaded\', () => {\n' +
      'console.log(\'animate Transitions\');\n' +
      '  const mainContent =  document.getElementById(\'application-content\');\n' +
      '  const skeletons =  document.getElementById(\'skeletons\');\n' +
      '\n' +
      '  // Fade in and out both pages\n' +
      '  skeletons.style.animation = \'fadeOut 800ms ease-out\';\n' +
      '  mainContent.style.animation = \'fadeIn 800ms ease-in forwards\';\n' +
      '  mainContent.style.position = \'absolute\';\n' +
      '  mainContent.style.top = 0;\n' +
      '\n' +
      '  window.setTimeout(() => {\n' +
      '    skeletons.style.display = \'none\';\n' +
      '  }, 800);' +
      '});';
    //this.renderer.appendChild(this._document.body, jsScript);
  }

  loadScriptsForApplication = () => {
    const scripts = ['./assets/reference-admin-app/runtime.js', './assets/reference-admin-app/polyfills.js',
      './assets/reference-admin-app/es2015-polyfills.js', './assets/reference-admin-app/main.js'];

    scripts.forEach((elem) => {
      const script =  this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.defer = true;
      script.onload = () => {
        console.log('Loaded script: ' + elem);
      };
      script.src = elem;
      this.renderer.appendChild(this.mainCont.nativeElement, script);
    });
  };

  loadHTMLForApplication = () => {
    this.applicationDiv = this.renderer.createElement('div');
    const appTag = this.renderer.createElement('app-root');

    this.renderer.setAttribute(this.applicationDiv, 'id', 'application-content');
    this.renderer.appendChild(this.applicationDiv, appTag);
    this.renderer.appendChild(this.mainCont.nativeElement, this.applicationDiv);
    console.log('HTML Tag app-root added');
  };

  animatePageTransition = () => {
    this.tranistionDone = true;
    console.log('animate Transitions');
    const mainContent =  this.applicationDiv  //document.getElementById('application-content');
    const skeletons =  this.skeletons.nativeElement; //document.getElementById('skeletons');

    // Fade in and out both pages
    skeletons.style.animation = 'fadeOut 800ms ease-out';
    // @ts-ignore
    mainContent.style.animation = 'fadeIn 800ms ease-in forwards';
    // @ts-ignore
    mainContent.style.position = 'absolute';
    // @ts-ignore
    mainContent.style.top = 0;

    window.setTimeout(() => {
      skeletons.style.display = 'none';
      // @ts-ignore
    }, this.animationDuration);
  }
}
