// Core Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Import Components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MaterialComponent } from './material/material.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

// Import Routers
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MaterialComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
