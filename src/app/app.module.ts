import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './public/about/about.component';
import { HomeComponent } from './public/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubNavbarComponent } from './components/navbar/sub-navbar/sub-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    ButtonModule,
    SplitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
