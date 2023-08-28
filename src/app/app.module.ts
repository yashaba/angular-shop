import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // 
import { FormsModule } from '@angular/forms'; // 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAuthComponent } from './components/customer-auth/customer-auth.component';
import { CustomerRegisterComponent } from './components/customer-auth/customer-register/customer-register.component';
import { CustomerLoginComponent } from './components/customer-auth/customer-login/customer-login.component';
import { CustomerGreetingComponent } from './components/customer-greeting/customer-greeting.component';
import { ScreenContainerComponent } from './components/screen-container/screen-container.component';
import { FaceRecognitionComponent } from './components/customer-auth/face-recognition/face-recognition.component';
import { PhoneKeyboardComponent } from './components/phone-keyboard/phone-keyboard.component';
import { OnScreenKeyboardComponent } from './components/on-screen-keyboard/on-screen-keyboard.component';
import { LoggedInCustomerComponent } from './components/logged-in-customer/logged-in-customer.component';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
// import {OnScreenKeyboardModule } from './test-module'
@NgModule({
  declarations: [
    AppComponent,
    CustomerAuthComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    CustomerGreetingComponent,
    ScreenContainerComponent,
    FaceRecognitionComponent,
    PhoneKeyboardComponent,
    OnScreenKeyboardComponent,
    LoggedInCustomerComponent,
    LanguagePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    // OnScreenKeyboardModule
  ],
  providers: [OnScreenKeyboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
