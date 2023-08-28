import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAuthComponent } from './components/customer-auth/customer-auth.component';
import { CustomerLoginComponent } from './components/customer-auth/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './components/customer-auth/customer-register/customer-register.component';
import { FaceRecognitionComponent } from './components/customer-auth/face-recognition/face-recognition.component';
import { LoggedInCustomerComponent } from './components/logged-in-customer/logged-in-customer.component';

const routes: Routes = [{ path: '', component: CustomerAuthComponent },
{
  path: 'login',
  component: CustomerLoginComponent
},
{ path: 'register', component: CustomerRegisterComponent },
{ path: 'shop', component: LoggedInCustomerComponent },
{ path: '**', component: CustomerAuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
