import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
