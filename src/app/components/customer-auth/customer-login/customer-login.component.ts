import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language-service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {
isLoginByFace : boolean = false
isLoginByPhone : boolean = false
currRegistrationPhase:number = 0
selectedLanguageMap
  constructor(private router : Router, private languageService : LanguageService) {
    this.selectedLanguageMap = this.languageService.getLanguageMap()

   }

  ngOnInit(): void {
  }
  setLoginType(loginType:string){
    (loginType == 'face') ?  this.isLoginByFace = true : this.isLoginByPhone = true
  }

  login(){
    this.router.navigate(['/shop'])
  }

}
