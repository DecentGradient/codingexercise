import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import{MatCardModule} from "@angular/material/card";
import { ResultsComponent } from './results/results.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {ResultsDatasource} from "./results/results.datasource";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCCc6MWGcUC7vSz-6cmnBjKa4g7RTXwPwY",
      authDomain: "codingexercise-08757.firebaseapp.com",
      projectId: "codingexercise-08757",
      storageBucket: "codingexercise-08757.appspot.com",
      messagingSenderId: "531622562386",
      appId: "1:531622562386:web:1f361eea144ccd5c096d8b",
      measurementId: "G-Z7N992FBRC"
    })),
    HttpClientModule,
    FormsModule,  // <-- import FormsModule before binding with [(ngModel)]
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,

  ],
  providers: [ResultsDatasource],
  bootstrap: [AppComponent]
})
export class AppModule { }
