import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorComponent } from './components/svgs/error/error.component';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, ErrorComponent],
  imports: [AppRoutingModule, BrowserModule, MaterialModule, CoreModule, HttpClientModule],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
