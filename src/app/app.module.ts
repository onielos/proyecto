import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CheckPipe } from './pipes/check.pipe';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { RouterModule } from '@angular/router';

const router = RouterModule.forChild([
  {path: 'resultado', component: ResultadoComponent}
])
@NgModule({
  declarations: [
    AppComponent,
    CheckPipe,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
