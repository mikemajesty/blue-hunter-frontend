import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent, ContentComponent]
})
export class AppModule { }
