import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooetrComponent } from './fooetr/fooetr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from "@angular/material/dialog";
import { ServicesComponent } from './services/services.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AllPlansComponent } from './all-plans/all-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooetrComponent,
    ServicesComponent,
    LoginModalComponent,
    AllPlansComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalComponent, AllPlansComponent]
})
export class AppModule { }
