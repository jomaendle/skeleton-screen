import {
  AfterContentChecked,
  AfterViewInit,
  Component, ElementRef, Inject,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {

  // DOM elements
  // @ts-ignore
  @ViewChild('mainContent') mainCont;
  // @ts-ignore
  @ViewChild('skeletons') skeletons;

  // global variables
  applicationDiv: null;
  title = 'Demo';
  animationDuration = 800;    // in milliseconds

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    // tslint:disable-next-line:variable-name
    @Inject(DOCUMENT) private _document: Document) {
    localStorage.clear();
  }

  ngOnInit(): void {
    //this.loadCSSForApplication();
  }

  ngAfterContentChecked(): void {
  }

  ngAfterViewInit(): void {
    this.appendScript( 'window.addEventListener(\'appLoaded\', () => {\n' +
      'let css = localStorage.getItem(\'cssLoaded\');\n' +
      '  if(css !== null && css !== \'\'){\n' +
      '    console.log(\'animate Transitions\');\n' +
      '    const mainContent =  document.getElementById(\'application-content\');\n' +
      '    const skeletons =  document.getElementById(\'skeletons\');\n' +
      '\n' +
      '    // Fade in and out both pages\n' +
      '    skeletons.style.animation = \'fadeOut 800ms ease-out\';\n' +
      '    mainContent.style.animation = \'fadeIn 800ms ease-in forwards\';\n' +
      '    mainContent.style.position = \'absolute\';\n' +
      '    mainContent.style.top = 0;\n' +
      '\n' +
      '    window.setTimeout(() => {\n' +
      '      skeletons.style.display = \'none\';\n' +
      '    }, 800);\n' +
      '  }' +
      '});');
    this.loadHTMLForApplication();
    this.loadScriptsForApplication();
  }

  appendScript(jsContent) {
    const jsScript = this.renderer.createElement('script');
    jsScript.type = 'text/javascript';
    jsScript.text = jsContent;
    this.renderer.appendChild(this.mainCont.nativeElement, jsScript);
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
      //this.renderer.appendChild(this.mainCont.nativeElement, script);
      this.renderer.appendChild(this.mainCont.nativeElement, script);
    });
  };

  loadCSSForApplication = () => {
    this.appendScript('const css = document.createElement(\'link\');\n' +
      '     // const css =  this.renderer.createElement(\'link\');\n' +
      '      css.type = \'text/css\';\n' +
      '      css.href = \'./assets/reference-admin-app/styles.css\';\n' +
      '      css.rel = \'stylesheet\';\n' +
      '      css.onload = () => {\n' +
      '        localStorage.setItem(\'cssLoaded\', \'true\');\n' +
      '        window.dispatchEvent(new Event(\'appLoaded\'));\n' +
      '        //this.fireEvent();\n' +
      '      };\n' +
      '      document.head.appendChild(css);');
    /*
    scripts.forEach((elem) => {
      const css = document.createElement('link');
     // const css =  this.renderer.createElement('link');
      css.type = 'text/css';
      css.href = './assets/reference-admin-app/styles.css';
      css.rel = 'stylesheet';
      css.onload = () => {
        localStorage.setItem('cssLoaded', 'true');
        window.dispatchEvent(new Event('appLoaded'));
        //this.fireEvent();
      };
      document.head.appendChild(css);
      //document.head.appendChild(this.mainCont.nativeElement, css);
      //this.renderer.appendChild(this.mainCont.nativeElement, css);
    });
*/
  }

  fireEvent() {
    console.log('loaded ccsss');
    this.appendScript('localStorage.setItem(\'cssLoaded\', \'true\');');
    this.appendScript('window.dispatchEvent(new Event(\'appLoaded\'))');
  }

  loadHTMLForApplication = () => {
    this.applicationDiv = this.renderer.createElement('div');
    const appTag = this.renderer.createElement('app-root');

    this.renderer.setAttribute(this.applicationDiv, 'id', 'application-content');
    this.renderer.appendChild(this.applicationDiv, appTag);
    this.renderer.appendChild(this.mainCont.nativeElement, this.applicationDiv);
    console.log('HTML Tag app-root added');
  };

  animatePageTransition = () => {
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
