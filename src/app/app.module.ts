import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberPadComponent } from './components/number-pad/number-pad.component';
import { CheckNullValuePipe } from './pipes/checkNullValue.pipe';
import { ListProductComponent } from './components/list-product/list-product.component';
import { StoreService } from './services/store.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadimgDirective } from './loadimg.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumberPadComponent,
    CheckNullValuePipe,
    ListProductComponent,
    LoadimgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
