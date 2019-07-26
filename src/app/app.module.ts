import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SkeletonScreenComponent } from './skeleton-screen/skeleton-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonScreenComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
