import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorComponent } from './components/svgs/error/error.component';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, ErrorComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, MaterialModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
