import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SkeletonScreenComponent } from './skeleton-screen/skeleton-screen.component';
import { SkeletonScreenListComponent } from './skeleton-screen-list/skeleton-screen-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonScreenComponent,
    SkeletonScreenListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
