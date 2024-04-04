import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubNavbarComponent } from './components/navbar/sub-navbar/sub-navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToastModule } from 'primeng/toast';
import { TokenInterceptor } from './token-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubNavbarComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    ButtonModule,
    SplitterModule,
    BrowserAnimationsModule,
    ToastModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
